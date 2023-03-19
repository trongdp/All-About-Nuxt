<template>
    <div class="bg-gray-100 h-screen w-full mb-20">
        <header class="mx-auto center flex justify-cente items-center flex-col relative py-10 bg-yellow-200 shadow-sm">
            <div class="relative">
                <img class="w-20 absolute -left-40 -rotate-12 " src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
                <h1 class="text-4xl text-yellow-500 font-black text-center rotate-3 ">Pinia Nuxt</h1>
                <p class= "text-center pb-1 font-bold">A Task To-do List</p>
            </div>
            <nav class="mt-5 px-2 py-2 rounded-full bg-white">
                <ul class="flex gap-5 font-bold">
                    <li class="col-span-1"><NuxtLink class="py-1 px-2 rounded-full" to="/">Home</NuxtLink></li>
                    <li class="col-span-1"><NuxtLink class="py-1 px-2 rounded-full" to="/fav">Favorite</NuxtLink></li>
                </ul>
            </nav>
        </header>
    <div class="container mx-auto max-w-xl">
        <div>
            <form  class="search-container flex py-10" @submit.prevent="handleTask">
                <input
                  type="text"
                  placeholder="I need to..."
                    class="w-full px-5 py-3 rounded-md border-2 border-gray-200 outline-none focus:border-yellow-400"
                  v-model="newTask" />
                <button class="px-5 py-3 bg-yellow-400 ml-4 rounded-md font-bold text-white a-hover a-focus" @click="handleTask">Add</button>
            </form>
        </div>
        <slot/>
    </div>
    </div>
</template>

<script setup>
import { useTaskStore } from '~/stores/taskStore';

    const taskStore = useTaskStore();
    const newTask = ref('');
    const handleTask = () => {
        if(newTask.value === '') return;
        taskStore.addTask(newTask.value);
        newTask.value = '';
    }
</script>

<style scoped>
.router-link-active.router-link-exact-active{
    @apply bg-yellow-400 text-white;
}
</style>