module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'saldjalsjd23948u2893dskjnf'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '38429839sdfkjshdfjsdhf'),
  },
});
