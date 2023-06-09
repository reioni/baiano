import { openai } from '../../core/openai';

export const ChatGPT = async (prompt: string) => {

    const _prompt = prompt.replace('$gpt', '').replace('$gpt-tts', '');

    const request = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt: _prompt,
        temperature: 0.2,
        max_tokens: 1024,
    })

    const response = request.data.choices[0].text.replace('\n', '').replace('\n', '');

    return response;
};