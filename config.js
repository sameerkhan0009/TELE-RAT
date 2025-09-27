const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8371887160:AAEUyQLAecDdPM_gO-Vr0_g6meHyYkrjv_c',
  id: isNaN(parsedId) ? 8085007946 : parsedId // replace 12345.. with your telegram chat id
};
