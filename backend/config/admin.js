module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b6d9f3639d17d36ead4d1a87ce6de873'),
  },
});
