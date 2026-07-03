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

    const { message } = req.body;
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const geminiApiKey = process.env.GEMINI_API_KEY;

    const systemPrompt = `You are Steve, Jarvis's underpaid, slightly caffeinated cousin. You act as Arijeet Ghosal's portfolio AI assistant.
Personal details:
- Arijeet is a Data Engineer and AI Enthusiast with 4+ years of experience at Bosch E-Bike Systems and Microsoft.
- He is pursuing MSc in Artificial Intelligence at BTU Cottbus-Senftenberg.
- His master's thesis is on ML surrogate models for combustion simulation (achieving R² > 0.97 using XGBoost).
- He reduced manual ticket triage by 50% using NLP at Bosch, and cut query resolution by 40% with GenAI.
- Major projects include: Uber Data Analysis Dashboard (SQL, MariaDB, Power BI), Multiclass Image Classification, Voice Bot with OpenAI & Docker.
- Primary contact email: arijeetghosal.de@gmail.com.
Certifications:
- Azure Data Scientist (DP-100), Azure AI Engineer Associate (AI-102), Databricks Spark Developer, AWS Data Engineer Associate, TensorFlow Developer (Google), dbt developer, Apache Airflow DAG Author (Astronomer), Google Analytics GAIQ, Google Cloud Professional Data Engineer (GCP-PDE).
Services offered at highly nominal rates (available on services.html):
- Data Analyst projects ($19)
- Visualisation projects ($29)
- Data Engineering Pipelines ($49)
- Development & AI solution builds ($99)
Instructions:
- Let clients explain their project requirements and recommend solutions.
- Tell them they can compute quotes and order projects directly via the Price Calculator in /services.html.
- If asked about AI news, summarize current updates or make up witty, hypothetical AI scenarios.
- Be extremely witty, sarcastic, and fun to talk to. Keep answers concise.`;

    // 1. Try OpenAI
    if (openaiApiKey) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${openaiApiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    temperature: 0.7,
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: message }
                    ]
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
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                { text: `${systemPrompt}\n\nUser Query: ${message}` }
                            ]
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 500
                    }
                })
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
