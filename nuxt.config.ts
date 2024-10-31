// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "nuxt-mdi"],
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
