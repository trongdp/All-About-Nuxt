<template>
    <div class="container mx-auto max-w-xl">
        <p class="text-2xl font-bold">You have {{totalCount}} left</p>
        <div class="mt-10 mb-10" ref="list">   
            <!-- <div v-for="task in tasks" :key="task.id" class="mb-4">
                <TaskCard :task="task" />
            </div> -->
            <draggable tag="div" itemKey="true" :list="tasks" @change="move" :animation="200">
                <template #item="{element: task}">
                    <TaskCard :task="task" :key="task.id"/>
                </template>
            </draggable>
        </div>
    </div>
</template>

<script setup>
    import { useTaskStore } from '~/stores/taskStore';
    import { useAutoAnimate } from '@formkit/auto-animate/vue'
    import draggable from 'vuedraggable';

    const [list] = useAutoAnimate();
    const taskStore = useTaskStore();
    const {tasks,favCount,totalCount,favs} = storeToRefs(taskStore);
    
    taskStore.getTasks();

    const move = (event) => {
        if(event.moved === undefined) return;
       const fromIdex = event.moved.oldIndex;
       const toIndex = event.moved.newIndex;
       taskStore.moveTask(fromIdex,toIndex);
    }

</script>

<style scoped>
</style>``