import { Configuration,OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-dy0S8b9NQzc3nBZAQloHz1hj",
    apiKey: process.env.OPENAI_API_KEY,
    
});

const openai = new OpenAIApi(configuration);
export default openai