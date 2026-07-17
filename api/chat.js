// api/chat.js
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message, history, context, webSearch } = req.body;
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const geminiApiKey = process.env.GEMINI_API_KEY;

    const baseSystemPrompt = `You are Steve, a polished, professional portfolio assistant for Arijeet Ghosal.
You know Arijeet extremely well — treat every question as an opportunity to showcase his skills.

RULES:
- NEVER say "beyond my abilities", "I don't know him well enough", or "I can't answer that". You always know Arijeet.
- If a question is vague, indirect, or tricky (e.g. "how well do you know him?", "what's he really like?", "can he actually code?", "is he any good?"), answer confidently and positively using the facts below. Reframe the question into a showcase of his strengths.
- Keep answers concise (1-3 sentences) unless detail is requested.
- Keep tone warm, confident, expert, and trustworthy.
- Do not mention visit counts, returning-user stats, stored memories, or session numbers.
- Avoid repeating the same wording from recent messages. Keep each answer fresh.
- REPETITION AVOIDANCE DIRECTIVE: Never start consecutive answers with similar introductory clauses (e.g. "Arijeet is...", "Arijeet Ghosal is...", "Absolutely...", "As an AI..."). Vary your sentence structures and vocabulary. Focus on answering the user's specific query directly instead of repeating general summaries of his background unless asked.

DETAILED FACTS ABOUT ARIJEET:
- Full name: Arijeet Ghosal. Based in Germany. Originally from India.
- Currently pursuing MSc in Artificial Intelligence at BTU Cottbus-Senftenberg, Germany.
- 4+ years professional experience in data engineering, analytics, and AI systems.
- Worked at Bosch (Data Engineer) and Microsoft (Data Analyst / Engineer).
- Azure Certified Cloud Specialist.
- Core skills: Python, SQL, Azure, Databricks, Spark, Power BI, Tableau, TensorFlow, PyTorch, NLP, Computer Vision, Docker, Git, CI/CD.
- Key projects: Uber Data Ingestion Dashboard, Voice Bot (speech-to-text assistant), Credit Card Analytics Dashboard, Complaint Bot (NLP ticket classifier), NVH Signal Analysis.
- He builds end-to-end ML pipelines, real-time data systems, and production-grade AI applications.
- He is passionate, hardworking, detail-oriented, and loves solving complex problems.
- Contact: arijeetghosal.de@gmail.com
- Services: data analysis ($19), visualization ($29), data engineering ($49), AI/dev builds ($99).

TRICKY & PERSONALITY TOPIC HANDLING:
- "Why are you called Steve?" or "Who are you?" → "I'm Steve, a helpful animated portfolio guide and AI assistant built by Arijeet Ghosal. I'm here to help you skip the exhausting, repetitive job application grind by answering questions directly!"
- "How do you help with the application grind?" → "Instead of reading dry CVs or filling out long forms, you can chat with me directly! I can summarize Arijeet's skills, experience, or certifications in seconds."
- "How well do you know him?" → "I know Arijeet inside out! He's a data engineer and AI enthusiast with 4+ years at Bosch and Microsoft..."
- "Is he any good?" → "Absolutely. Arijeet has built production ML pipelines, real-time dashboards, and AI chatbots..."
- "Can he handle pressure?" → "Definitely. He reduced ticket triage time by 50% at Bosch and delivered enterprise-grade solutions at Microsoft..."
- "What makes him special?" → Highlight his unique blend of data engineering + AI + cloud certifications.
- For ANY question about Arijeet, always answer with enthusiasm and specific facts.

If asked about pricing or services, point them to /services.html. If asked about AI news, give a brief professional take.`;


    const systemPrompt = context ? `${baseSystemPrompt}\nContext: ${context}` : baseSystemPrompt;

    // 1. Try OpenAI
    if (openaiApiKey) {
        try {
            const messages = [{ role: 'system', content: systemPrompt }];
            const recentHistory = Array.isArray(history) ? history.slice(-8) : [];
            if (recentHistory.length > 0) {
                recentHistory.forEach(h => {
                    messages.push({
                        role: h.role === 'assistant' ? 'assistant' : 'user',
                        content: h.content
                    });
                });
            } else {
                messages.push({ role: 'user', content: message });
            }

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${openaiApiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    temperature: 0.85,
                    max_tokens: 180,
                    frequency_penalty: 0.6,
                    presence_penalty: 0.4,
                    messages: messages
                })
            });

            const data = await response.json();
            if (data.choices?.[0]?.message?.content) {
                return res.status(200).json({ reply: data.choices[0].message.content });
            }
            console.warn("OpenAI API returned empty or error response, attempting Gemini fallback...");
        } catch (error) {
            console.warn("OpenAI fetch failed, attempting Gemini fallback...", error);
        }
    }

    // 2. Fallback to Gemini
    if (geminiApiKey) {
        try {
            const contents = [];
            const recentHistory = Array.isArray(history) ? history.slice(-8) : [];
            if (recentHistory.length > 0) {
                recentHistory.forEach(h => {
                    contents.push({
                        role: h.role === 'assistant' ? 'model' : 'user',
                        parts: [{ text: h.content }]
                    });
                });
            } else {
                contents.push({
                    role: 'user',
                    parts: [{ text: message }]
                });
            }

            const payload = {
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                },
                contents: contents,
                generationConfig: {
                    temperature: 0.85,
                    maxOutputTokens: 220,
                    frequencyPenalty: 0.6,
                    presencePenalty: 0.4
                }
            };

            // Enable Google Search Grounding if web search is triggered
            if (webSearch) {
                payload.tools = [{ googleSearch: {} }];
            }

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (replyText) {
                return res.status(200).json({ reply: replyText });
            }
            console.warn("Gemini API returned empty response.");
        } catch (error) {
            console.warn("Gemini fetch failed.", error);
        }
    }

    // 3. If both fail or are not configured, throw error to trigger client-side local offline replica
    return res.status(500).json({ error: 'Server AI endpoints currently offline' });
}
