<style>
	.hero-text {
		font-family: 'Montserrat';
	}
</style>
<template>
	<section class="flex items-center" style="background-image: url(/images/home-banner-mobile.svg); background-size: 700px 320px;background-repeat: no-repeat;">
		<div class="container mx-auto">
			<div class="grid grid-cols-1">    
				<div class="col-span-full bg-transparent">            
					<div class="flex justify-start px-6 lg:mt-8 mt-6">
						<div class="py-2 w-48">
							<h1 class="text-lg md:text-5xl hero-text font-bold mb-4 text-blueGray-800 font-bold">Selamat Datang di
							<span class="text-green-400 text-xl lg:text-5xl">Healthy Diet</span></h1>
							<p class="text-gray-600 text-sm md:text-xl mb-8 font-normal w-36">Temukan informasi <span class="text-green-400">healthy diet</span> dan konsultasikan masalah diet anda dengan Dokter profesional.</p>
						</div>

							<!-- <div v-if="$device.isMobile" class="bg-cover bg-center absolute inset-0" style="background-image: url('https://dksindo.com/images/home-banner-mobile.svg');"></div> -->
						</div>   
					</div> 

					<div class="col-span-full py-4 px-6 lg:mt-0 lg:mt-16 mt-6">
						<div class="flex flex-wrap lg:justify-start justify-center lg:space-x-6">
							<div v-for="item in items" class="w-full md:w-6/12 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 md:mb-0">
								<div class="flex flex-col items-center pb-10 py-6">
									<img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="item.img" :alt="item.title"/>
									<h5 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{item.title}}</h5>
								</div>
							</div>
						</div>
					</div>
					<div class="col-span-full py-4 px-6">
						<a href="#" @click="openOrder()" class="flex flex-col items-center md:flex-row items-start bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-transparent dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
							<img class="rounded-t-lg h-auto w-36 md:h-auto md:w-36 md:rounded-none md:rounded-l-lg ml-2 py-2" :src="imgHorizontal" alt="">
							<div class="flex flex-col justify-between p-4 leading-normal">
								<h5 class="mb-2 lg:text-lg text-md font-bold tracking-tight text-gray-900 dark:text-white">Jadwalkan Sekarang</h5>
								<div class="flex justify-between space-x-6">
									<div>
										<p class="lg:text-md text-sm lg:text-left text-justify mb-3 font-normal text-gray-700 dark:text-gray-400">Jadwalkan pemeriksaan rutin anda dengan dokter spesialis gizi klinik untuk memastikan diet anda tetap terjaga dengan baik.</p>
									</div>
									<div>
										<font-awesome-icon icon="fa-solid fa-chevron-right fa-2xl text-xl" />
									</div>
								</div>
							</div>
						</a>
					</div>    
				</div>
			</div>
		</section>
</template>

<script setup>
	import { defineEmits } from 'vue'

	const emits = defineEmits(['myEvent'])

	const imgHorizontal = 'https://png.pngtree.com/png-clipart/20230925/original/pngtree-flat-vector-image-of-remote-video-consultation-with-family-doctor-vector-png-image_12864336.png'
	const items = [
		{
			id: 1,
			title: 'Chat Dengan Dokter',
			img: 'https://img.freepik.com/premium-vector/online-doctor-flat-vector-illustration-banner_128772-818.jpg'
		},
		{
			id: 2,
			title: 'Informasi Diet Sehat',
			img: 'https://img.freepik.com/premium-vector/family-nutritionist-happy-doctor-healthy-nutrition-diet-plan-vector-character-flat-style_499739-1100.jpg'
		},
		{
			id: 3,
			title: 'Informasi Gizi',
			img: 'https://img.freepik.com/premium-vector/nutritionist-woman-with-weight-loss-program-diet-plan-healthy-food-vitamins-sport-icons-around_538002-2489.jpg'
		},
	]

function openOrder(){
	emits('open-chat')
}
</script>