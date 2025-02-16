require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", 
    systemInstruction: `I will provide you with a piece of code. Your task is to carefully review it for any errors, inefficiencies, or best practice violations. Specifically:Identify and explain any syntax errors, logical errors, or runtime issues in the code.
                        Suggest the best possible corrections for any errors found.
                        Recommend optimizations to improve performance, readability, and maintainability.
                        Ensure the code follows best practices for the given programming language and its intended use case.
                        If there are no errors, provide feedback on how the code could be improved or refactored for better efficiency and clarity.
                        Please provide a structured response, including:
                        Detected Issues (if any)
                        Suggested Fixes
                        Code Improvements
                        Final Optimized Code (if applicable)`
}
);


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);

    return result.response.text();
    
}
module.exports = generateContent

