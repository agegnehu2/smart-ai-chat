// Localization data for responses
const responses = {
    'en': {
        'greeting': "Hello! How can I assist you today?",
        'default': "That's interesting! Tell me more."
    },
    'am': {
        'greeting': "ሰላም! ዛሬ እንዴት ልረዳህ እችላለሁ?",
        'default': "ይህ አስደሳች ነው! እስኪ ተጨማሪ ንገረኝ።"
    }
};

let currentLang = 'en'; // Default language set to English

function setLanguage(lang) {
    if (responses[lang]) currentLang = lang;
}

// Function to generate smarter AI responses
function getAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple conversation rules
    if (lowerMessage.includes("hi") || lowerMessage.includes("hello")) {
        return responses[currentLang]['greeting'];
    }
    return responses[currentLang]['default'];
}

// Use this inside your sendMessage function
setTimeout(() => {
    const aiMessage = document.createElement('div');
    aiMessage.classList.add('ai-message');
    // Calling the getAIResponse function
    aiMessage.textContent = getAIResponse(userText); 
    chatBox.appendChild(aiMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}, 500);
