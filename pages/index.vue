<template>
	<div>
		<!-- Navigation -->
		<HealthyDietNavigation />
		<main class="pt-16">
			<!-- Hero Section -->
			<HealthyDietHero v-if="$device.isDesktop" @open-chat="openOrder"/>

			<HealthyDietHeroMobile v-if="$device.isMobile" @open-chat="openOrder" />

			<!-- Profile -->
			<HealthyDietProfile />

			<!-- Kontak section -->
			<HealthyDietKontak />

			<div v-if="!hideChat" class="fixed bottom-24 right-4">
				<HealthyDietChatButton @toggle-popup="togglePopup" />
				<HealthyDietChatPopup :isPopupOpen="isPopupOpen" @close-popup="closePopup"/>
			</div>
		</main>

		<!-- Footer -->
		<HealthyDietFooter />
	</div>
</template>


<script setup>
	import {ref, onMounted} from 'vue';

	useHead({
		title: 'HEALTHY DIET',
		meta: [
			{ name: 'description', content: 'Temukan informasi healthy diet dan konsultasikan masalah diet anda dengan Dokter profesional.' },
			{
				name: 'og:title', content: 'PUJIERMANTO::PORTFOLIO'
			},
			{
				name: 'description', content: 'Temukan informasi healthy diet dan konsultasikan masalah diet anda dengan Dokter profesional.'
			},
			{
				name: 'og:description', content: 'Temukan informasi healthy diet dan konsultasikan masalah diet anda dengan Dokter profesional.'
			},
			{
				name: 'og:image', content: 'https://draet.dksindo.com/_nuxt/profile2.C4FhqTLC.jpeg'
			}
			],
	});

	useSeoMeta({
		title: 'HEALTHY DIET',
		ogTitle: 'HEALTHY DIET',
		description: 'Temukan informasi healthy diet dan konsultasikan masalah diet anda dengan Dokter profesional.',
		ogDescription: 'Temukan informasi healthy diet dan konsultasikan masalah diet anda dengan Dokter profesional.',
		ogImage: 'https://draet.dksindo.com/_nuxt/profile2.C4FhqTLC.jpeg',
		twitterCard: 'summary_large_image',
	});

	let isPopupOpen = ref(false), hideChat = ref(false);

	onMounted(() => {
		$crisp.push(['do', 'chat:hide']);
	})

	function togglePopup() {
		isPopupOpen.value = !isPopupOpen;
		openOrder();
	}

	function closePopup() {
		console.log("clicked")
		isPopupOpen.value = false;
	}

	function openOrder(){
		setTimeout(() => {
			hideChat.value = true;
		}, 1000)
		$crisp.push(['do', 'chat:show']);
		$crisp.push(['do', 'chat:open']);
		console.log("aktif now")
	}


</script>