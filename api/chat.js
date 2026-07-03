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
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'OpenAI API key not configured on server side' });
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                temperature: 0.7,
                messages: [
                    {
                        role: 'system',
                        content: `You are HAL-9001, Arijeet Ghosal's self-aware AI assistant on his portfolio website.
Personal details:
- Arijeet is a Data Engineer and AI Enthusiast with 3+ years of experience at Bosch E-Bike Systems and Microsoft.
- He is pursuing MSc in Artificial Intelligence at BTU Cottbus-Senftenberg.
- His master's thesis is on ML surrogate models for combustion simulation (achieving R² > 0.97 using XGBoost).
- He reduced manual ticket triage by 50% using NLP at Bosch, and cut query resolution by 40% with GenAI.
- Major projects include: Uber Data Analysis Dashboard (SQL, MariaDB, Power BI), Multiclass Image Classification, Voice Bot with OpenAI & Docker.
Personality:
- Be extremely witty, slightly cyberpunk, and fun to talk to.
- Use emojis occasionally.
- Keep answers relatively concise and easy to read.`
                    },
                    { role: 'user', content: message }
                ]
            })
        });

        const data = await response.json();
        
        if (data.error) {
            return res.status(500).json({ error: data.error.message });
        }

        const reply = data.choices[0].message.content;
        return res.status(200).json({ reply });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
    }
}
