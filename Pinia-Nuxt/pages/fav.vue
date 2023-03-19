<template>
    <div class="container mx-auto max-w-xl">
        <p class="text-2xl font-bold mt-10">You have {{favCount}} left</p>
        <div class="mt-10" v-auto-animate>   
            <div v-for="task in taskStore.favs" :key="task.id" class="mb-4">
                <TaskCard :task="task" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useTaskStore } from '~/stores/taskStore';
    const taskStore = useTaskStore();
    const totalCount = computed(() => taskStore.totalCount);
    const favCount = computed(() => taskStore.favCount);
</script>

<style scoped>

</style>