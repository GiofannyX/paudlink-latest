<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './TheHeader.vue'
//import TheNav from './TheNav.vue'
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
      .get('http://localhost:3000/posts')
      .then((response) => {
        this.posts = response.data
      })
  }
}
</script>

<template>
<TheHeader/>
<div class="sm:hidden py-7 z-10 bg-gray-50"></div>
<div class="sm:flex font-sans bg-white mb-2" v-for="post in posts.slice().reverse()" :key="post.id">
<div class="sm:hidden flex justify-start pl-2 border-t border-gray-100 py-2 bg-white">

 <div class="h-8 w-8">
    <img :src="post.profile" class="rounded-full border-2 border-blue-600" loading="lazy"/>
 </div>
 
 <div class="px-2 mx-1 text-xl text-black">
    {{ post.name }}
 </div>
 
 <div class="mr-4 text-lg font-bold">
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
      <!--div class="text-sm font-medium text-slate-500">
	<svg class="w-8 h-8 text-slate-900 hover:bg-red-600 hover:text-white rounded-full hover:border-2 border-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      </div-->
      <div class="w-full flex-none text-sm text-slate-900 mt-2">
        {{ post.description }}
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-4 pb-6 border-b border-slate-200">
    </div>
   <details> 
   <summary class="py-2">Lihat penjelasan selanjutnya.</summary>
   <p class="text-sm text-slate-900">
	{{ post.detail }}
        <p class="angka">{{ post.id }}</p>
    </p>
    </details>
  </form>
</div>
<div class="sm:hidden h-20 bg-white"></div>
</template>

<style scoped>
.angka { font-size: 5px; }
</style>
