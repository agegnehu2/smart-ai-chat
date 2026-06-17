// Localization data
const translations = {
    'en': { 'reply': "Thanks." },
    'am': { 'reply': "እናመሰግናለን።" },
    'fr': { 'reply': "Merci." }
};

let currentLang = 'en';

function setLanguage(lang) {
    if (translations[lang]) currentLang = lang;
}

function sendMessage() {
    const input = document.getElementById('message');
    const chatBox = document.getElementById('chat-box');
    const userText = input.value.trim();

    if (userText === "") return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = userText;
    chatBox.appendChild(userMessage);

    // Add AI reply based on selected language
    setTimeout(() => {
        const aiMessage = document.createElement('div');
        aiMessage.classList.add('ai-message');
        aiMessage.textContent = translations[currentLang]['reply'];
        chatBox.appendChild(aiMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
