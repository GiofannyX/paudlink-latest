<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import TheNav from './TheNav.vue'
</script>
<template>
<section class="px-4">
<header class="flex justify-between py-3 border-b text-gray-900 bg-white px-1 hover:underline">
<RouterLink to="/"><div class="font-md">Kembali</div></RouterLink>
<div class="font-bold">Info System</div>
</header>
<main class="text-sm bg-white">
<div class="py-2">Version : 1.0.0</div>
<div class="py-2">Development App : Paudlink Developer</div>
<div class="py-2">Contact : giofanny910@gmail.com</div>
</main>
</section>
</template>

<script>
</script>

<style>
</style>
