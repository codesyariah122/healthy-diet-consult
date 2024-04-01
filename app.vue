<template>
  <div>
    <NuxtPwaManifest />
    <NuxtPage />
  </div>
</template>


<script setup>
// If you want to use it in setup, import from the nuxtApp.
  const { $pwa } = useNuxtApp()

  useHead({
    title: 'Healthy Diet',
    meta: [
      { name: 'description', content: 'Temukan informasi healthy diet dan konsultasikan masalah diet anda dengan Dokter profesional.' }
      ],
  });

  useSeoMeta({
    title: 'Healthy Diet',
    ogTitle: 'Healthy Diet',
    description: 'Dalam pengawasan dan bimbingan langsung dr. Ade Erni, M.Gizi, SpGK, AIFO-K yang berpengalaman ebagai spesialis gizi, saat ini Berpraktek langsung di Poli / Klinik Gizi RSUD Oto Iskandar Di Nata.',
    ogDescription: 'Temukan informasi healthy diet dan konsultasikan masalah diet anda dengan Dokter profesional.',
    ogImage: 'https://draet.dksindo.com/images/home-banner-mobile.svg',
    twitterCard: 'summary_large_image',
  })

  onMounted(() => {
    if ($pwa.offlineReady)
      confirm('App ready to work offline')
  })
</script>