const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotWindow = document.getElementById("chatbot-window");
const messagesDiv = document.getElementById("chatbot-messages");
const form = document.getElementById("chatbot-form");
const input = document.getElementById("chatbot-input");

chatbotIcon.addEventListener("click", () => {
  chatbotWindow.style.display =
    chatbotWindow.style.display === "flex" ? "none" : "flex";
});

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = "message " + sender;
  div.textContent = text;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;
  addMessage(userMessage, "user");
  input.value = "";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ТУТ_ВАШ_API_KEY",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    const data = await response.json();
    const botMessage = data.choices[0].message.content;
    addMessage(botMessage, "bot");
  } catch (err) {
    console.error(err);
    addMessage("Виникла помилка, спробуйте пізніше.", "bot");
  }
});
