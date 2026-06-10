function sendMessage() {

    const input = document.getElementById("message");
    const chatBox = document.getElementById("chat-box");

    const userText = input.value.trim();

    if(userText === "") return;

    // User message
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = userText;

    chatBox.appendChild(userMessage);

    // AI reply
    setTimeout(() => {

        const aiMessage = document.createElement("div");
        aiMessage.classList.add("ai-message");

        aiMessage.textContent =
        "Thanks for your message: " + userText;

        chatBox.appendChild(aiMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
