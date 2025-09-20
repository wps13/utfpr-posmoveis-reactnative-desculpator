// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
    GoogleGenAI,
} from '@google/genai';

export async function excusesGenerator(excuse: string) {
    const ai = new GoogleGenAI({
        apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
    });
    const config = {
        thinkingConfig: {
            thinkingBudget: -1,
        },
        systemInstruction: [
            {
                text: `Estou fazendo um aplicativo de desculpa esfarrapadas e gostaria que você gerasse desculpas esfarrapadas com base na entrada, gere apenas uma desculpa, que seja engraçada e sem ofensas. Não sugira links.

A expressão é utilizada para se referir a uma justificativa ou explicação pouco convincente, que não parece ser sincera ou verdadeira. A expressão é comumente utilizada em contextos informais, para descrever situações em que alguém tenta se desculpar por um erro ou falha, mas de maneira pouco convincente. 

Exemplo de desculpa sobre viajar: Não viajo porque não tenho tempo`,
            }
        ],
    };
    const model = 'gemini-2.5-flash-lite';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: excuse,
                },
            ],
        },
    ];

    const response = await ai.models.generateContent({
        model,
        config,
        contents,
    });
    const result = response?.candidates?.[0]?.content?.parts?.[0]?.text;
    return result;
}

