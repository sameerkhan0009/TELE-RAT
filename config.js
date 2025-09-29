const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8196572561:AAE1tW2SnGlZUk_qTaFoXXKtKEFnZZtNBzQ',
  id: isNaN(parsedId) ? 7968584207 : parsedId // replace 12345.. with your telegram chat id
};
