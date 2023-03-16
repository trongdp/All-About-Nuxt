<template>
    <div class="task-card flex justify-between shadow-md px-5 py-4 rounded-md bg-white a-hover">
        <h3 class="font-black">{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons text-gray-300" @click="taskStore.deleteTask(task.id)">delete</i>
            <i v-if="!task.isFav" class="material-icons text-gray-300" @click="taskStore.addTasktoFav(task.id)">favorite</i>
            <i v-else class="material-icons text-pink-600" @click="taskStore.addTasktoFav(task.id)">favorite</i>
        </div>
    </div>
</template>

<script setup>
    import { useTaskStore } from '~~/stores/taskStore';
    const taskStore = useTaskStore();
    const props = defineProps({
        task: {
            type: Object,
            required: true
        }
    })
</script>

<style lang="scss" scoped>

</style>