<template>
    <div class="shadow-md px-5 py-4 rounded-md bg-white cursor-pointer mb-3" v-auto-animate>
        <div class="flex justify-between" >
            <h3 @click="show = !show" class="font-black">{{ task.title }}</h3>
            <div class="icons">
                <i class="material-icons text-gray-300" @click="taskStore.deleteTask(task.id)">delete</i>
                <i v-if="!task.isFav" class="material-icons text-gray-300" @click="taskStore.addTasktoFav(task.id)">favorite</i>
                <i v-else class="material-icons text-pink-600" @click="taskStore.addTasktoFav(task.id)">favorite</i>
            </div>
        </div>
        <div v-if="show">
            <p @click="show = !show" class="text-gray-500 py-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quo, maxime voluptas laudantium neque facere fuga culpa asperiores placeat a totam, commodi ipsa rerum quam vitae assumenda expedita repudiandae quas.</p>
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

    const show = ref(false);
</script>

<style lang="scss" scoped>

</style>