// Exemplo simples: aqui você integraria com Dialogflow
async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (!message) return;

    // Adiciona mensagem do usuário
    const messagesDiv = document.getElementById('messages');
    const userMsg = document.createElement('div');
    userMsg.textContent = "Você: " + message;
    messagesDiv.appendChild(userMsg);

    // Aqui chamaria sua API do Dialogflow
    // Exemplo fixo por enquanto
    const botReply = document.createElement('div');
    botReply.textContent = "Bot: Resposta de exemplo (aqui virá a resposta do Dialogflow)";
    messagesDiv.appendChild(botReply);

    input.value = "";
}
