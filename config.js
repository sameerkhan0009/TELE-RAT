const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8343499016:AAGUBKexpE8u6XISxIgd0jomZiaILgcbFCI',
  id: isNaN(parsedId) ? 8147216425 : parsedId // replace 12345.. with your telegram chat id
};
