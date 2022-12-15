<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import TheNav from './TheNav.vue'
</script>
<template>
<section class="bg-gray-50 border-b mb-20 px-5">
<header class="flex justify-between py-3 text-gray-900 bg-white px-1 hover:underline">
<p class="font-semibold">Dashboard</p>
<RouterLink to="/add-home"><p class="text-md">Add Post</p></RouterLink>
<RouterLink to="/add-paper"><p class="text-md">Add Paper</p></RouterLink>
<RouterLink to="/add-work"><p class="text-md">Add Work</p></RouterLink>
</header>
    <form @submit.prevent="createPost">
      <div>
        <label for="userId" class="block my-2 text-slate-500">UserID</label>
        <input type="text" class="border-2 w-full p-1 py-1 border-gray-200 rounded" id="id" v-model="postData.id">
      </div>
      <div>
        <label for="profile" class="block my-2 text-slate-500">Profile</label>
        <input type="text" class="border-2 w-full p-1 py-1 border-gray-300 rounded" id="profile" v-model="postData.profile">
      </div>
      <div>
        <label for="name" class="block my-2 text-slate-500">Name</label>
        <input type="text" class="border-2 w-full p-1 py-1 border-gray-400 rounded" id="name" v-model="postData.name">
      </div>
      <div>
        <label for="image" class="block my-2 text-slate-500">Image</label>
        <input type="text" class="border-2 w-full p-1 py-1 border-slate-400 rounded" id="image" v-model="postData.image">
      </div>
      <div>
        <label for="title" class="block my-2 text-slate-500">Title</label>
        <input type="text" class="border-2 w-full p-1 py-1 border-slate-400 rounded" id="title" v-model="postData.title">
      </div>
      <div>
        <label for="file" class="block my-2 text-slate-500">File</label>
        <input type="text" class="border-2 w-full p-1 py-1 border-slate-400 rounded" id="file" v-model="postData.file">
      </div>
      <div>
        <label for="detail" class="block my-2 text-slate-500">Detail</label>
        <textarea class="border-2 w-full p-1 h-40 border-slate-400 rounded" id="detail" v-model="postData.detail"></textarea>
      </div>
      <button class="bg-slate-700 hover:bg-blue-500 border w-50 py-2 my-4 px-6 text-sm text-gray-50 rounded">Create Post</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postData: {
        id: '',
	profile: '',
	name: '',
	image: '',
        title:  '',
        detail: ''
      }
    }
  },
  methods: {
	createPost() {
		axios
		  .post('http://localhost:3000/papers', this.postData)
		  .then((response) => console.log(response))
	}
  }
}
</script>

<style>
</style>
