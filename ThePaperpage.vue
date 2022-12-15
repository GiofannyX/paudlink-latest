<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './TheHeader.vue'
import TheNav from './TheNav.vue'
</script>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() { 
    axios
      .get('http://localhost:3000/papers')
      .then((response) => {
        this.posts = response.data
      })
  },
}
</script>

<template>
<TheHeader/>
<div class="sm:hidden py-7 bg-gray-50"></div>
<div class="sm:flex font-sans bg-white" v-for="post in posts.slice().reverse()" :key="post.id">
<div class="sm:hidden flex justify-start pl-4 py-2 border-b-2 border-t border-gray-100 bg-white">

 <div class="h-8 w-8">
    <img :src="post.profile" class="border-2 border-blue-600 rounded-full" loading="lazy"/>
 </div>
 
 <div class="px-2 ml-1 text-xl text-black">
    {{ post.name }}
 </div>
 
 <div class="mr-4 text-2xl font-bold">
    <img src="/badge.svg" class="w-6" loading="lazy"/>
 </div>

</div>

  <div class="flex-none w-full sm:w-80 relative">
    <img :src="post.image" alt="Pictures" class="inset-0 w-full sm:border border-gray-100" loading="lazy"/>
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <p class="flex-auto text-md font-semibold text-slate-900">
	{{ post.title }}
      </p>
      <!--div class="text-lg font-semibold text-slate-500">
	<svg class="w-8 h-8 text-slate-900 hover:bg-red-600 hover:text-white rounded-full hover:border-2 border-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      </div-->
      <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        <a :href="post.file" class="hover:bg-blue-50 py-1 px-4">Download</a>
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <!--div class="space-x-2 flex text-sm">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div-->
    </div>
    <!--div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div-->
    <p class="text-sm text-slate-700">
	{{ post.detail }}
        <p class="angka">{{ post.id }}</p>
    </p>
  </form>
</div>
<div class="sm:hidden h-20 bg-white"></div>
<TheNav/>
</template>

<style scoped>
.angka {font-size: 3px;}
</style>
