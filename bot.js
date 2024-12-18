const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('серкетный токенн', { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    'Привет! Я бот, который считает, сколько дней осталось до Нового года. Введите текущую дату в формате ГГГГ-ММ-ДД (например, 2024-12-18).'
  );
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Проверка формата даты
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    const currentDate = new Date(text);
    if (isNaN(currentDate.getTime())) {
      bot.sendMessage(chatId, 'Некорректная дата. Пожалуйста, введите дату в формате ГГГГ-ММ-ДД.');
    } else {
      const nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);
      const daysLeft = Math.ceil((nextNewYear - currentDate) / (1000 * 60 * 60 * 24));
      bot.sendMessage(chatId, `До Нового года осталось ${daysLeft} дней! 🎉`);
    }
  } else {
    bot.sendMessage(chatId, 'Пожалуйста, введите дату в формате ГГГГ-ММ-ДД.');
  }
});