<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<footer class="shadow fixed bottom-0 left-0 right-0 border-t border-slate-100 text-slate-500 bg-white">
    <div class="flex justify-evenly sm:justify-between mx-auto md:w-1/2">
	<RouterLink to="/">
        <div class="py-3 px-5 hover:border-t-2 border-neutral-900 hover:bg-blue-100">
	    <svg class="text-slate-800 w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
	</div>
	</RouterLink>
	<RouterLink to="/paper">
        <div class="py-3 px-5 hover:border-t-2 border-neutral-900 hover:bg-blue-100">
	    <svg class="text-slate-800 w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
        </div>
        </RouterLink>
	<RouterLink to="/work">
	<div class="py-3 px-5 hover:border-t-2 border-neutral-900 hover:bg-blue-100">
	    <svg class="text-slate-800 w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
	</div>
	</RouterLink>
    </div>
</footer>
</template>

<style scoped>
</style>
