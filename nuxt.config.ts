// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "nuxt-mdi",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900],
    },
  },
  eslint: {
    // Aditional configs here
  },
  runtimeConfig: {
    public: {
      cookieName: process.env.COOKIE_TOKEN_NAME,
      baseUrl: process.env.BASE_URL,
    },
  },
});
