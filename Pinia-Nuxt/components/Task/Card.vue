<template>
    <div class="task-card flex justify-between shadow-md px-5 py-4 rounded-md bg-white a-hover a-focus">
        <h3 class="font-black">{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons text-gray-300">delete</i>
            <i class="material-icons text-gray-300">favorite</i>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        task: {
            type: Object,
            required: true
        }
    })
</script>

<style lang="scss" scoped>

</style>