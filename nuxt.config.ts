// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  server: {
    port: 9019
  },
  alias: {
    // "@": resolve(__dirname, "/")
    assets: "/<rootDir>/assets"
  },
  body: true,
  components: true,
  devtools: { enabled: true },
  head: {
    title: "HEALTHY DIET",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Temukan informasi healthy diet dan konsultasikan masalah diet anda dengan Dokter profesional.",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "keyword",
        content: "Temukan informasi healthy diet dan konsultasikan masalah diet anda dengan Dokter profesional.",
      },
      {
        name: "description",
        content: "Dalam pengawasan dan bimbingan langsung dr. Ade Erni, M.Gizi, SpGK, AIFO-K yang berpengalaman ebagai spesialis gizi, saat ini Berpraktek langsung di Poli / Klinik Gizi RSUD Oto Iskandar Di Nata.",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://draet.dksindo.com/",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "HEALTHY DIET",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "HEALTHY DIET",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:"Temukan informasi healthy diet dan konsultasikan masalah diet anda dengan Dokter profesional.",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image:type",
        property: "og:image:type",
        content: "image/png",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://draet.dksindo.com/images/home-banner-mobile.svg",
      },
      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "600",
      },
      {
        hid: "og:image:height",
        property: "og:image:height",
        content: "600",
      },
    ],
    link: [
    ],
    script: [
    ]
  },
  css: [
    "@/assets/css/main.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    'vue3-carousel-nuxt',
    '@vite-pwa/nuxt',
    ['@nuxtjs/google-fonts', {
        families: {
          Poppins: true,
          Montserrat: true,
          Roboto: true,
          Inter: [400, 700],
          'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
          Inter: '200..700',
          'Crimson Pro': {
            wght: '200..900',
            ital: '200..700',
          }
        }
    }]
  ],
  carousel: {
    prefix: 'C'
  },

  device: {
    refreshOnResize: true
  },
  pwa: {
    meta: {
      title: "HEALTHY::DIET",
      author: "HEALTHY DIET",
      icon: true,
      canonical: "https://draet.dksindo.com/",
      description: "",
      keywords: "SIRMUH - SIROJUL MUHTADIN",
      ogUrl: "https://draet.dksindo.com/",
      ogType: "website",
      ogSiteName: "HEALTHY::DIET",
      ogTitle: "HEALTHY::DIET",
      ogImage: "/icon.png",
      ogImageWidth: "600",
      ogImageHeight: "400",
    },
    manifest: {
      lang: "en",
      name: "HEALTHY::DIET",
      short_name: "HEALTHY DIET",
      description: "",
      start_url: "/",
      lang: "en",
      display: "standalone",
      theme_color: "#000",
      background_color: "#000",
      icons: [
        {
          src: "/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable any",
        },
      ],
    },
  },
  buildModules: [
    'nuxt-tailwind-heroicons'
  ],
   plugins: [
    '~/plugins/fontawesome',
    {src: '~/plugins/crisp', mode: 'client', ssr: false}
  ]
})
