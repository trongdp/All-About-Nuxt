<template>
    <div class="container mx-auto max-w-xl">
        <p class="text-2xl font-bold">You have {{totalCount}} left</p>
        <div class="mt-10">   
            <div v-for="task in taskStore.tasks" class="mb-4">
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