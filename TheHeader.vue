<template>
<header class="sm:hidden fixed left-0 right-0 border-b border-t border-slate-100 bg-white text-slate-800 flex justify-between">
    <div class="flex justify-between py-2 px-4 text-neutral-900 font-medium text-2xl">
	<div class="w-10 mt-2 h-4 rounded-full border-4 border-blue-500"><div class="w-8 h-2 rounded-full"/></div> <p class="px-2">Paudlink</p>
    </div>
    <div class="flex justify-end">
        <RouterLink to="/system">
	<div class="py-2 px-4 hover:bg-blue-50">
	  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
        </div>
	</RouterLink>
	<RouterLink to="/add-home">
        <div class="py-2 px-4 hover:bg-blue-50">
	  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>
        </div>
	</RouterLink>
    </div>
</header>
</template>

