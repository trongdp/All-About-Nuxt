export const useTaskStore = defineStore('taskStore', () => {
    //state
    const tasks = ref([]);

    //getters
    const favs = computed(() => {
        return tasks.value.filter(task => task.isFav);
    });

    const favCount = computed(() => {
        return tasks.value.reduce((total, task) => {
            return task.isFav ? total + 1 : total;
        },0);
    });

    const totalCount = computed(() => {
        return tasks.value.length;
    });

    //actions

    const getTasks = async () => {
        const res = await $fetch('http://localhost:3000/tasks');
        tasks.value = res;
    }

    const addTask = async (task) => {
        const newTask = {
            id: Math.floor(Math.random() * 100000),
            title: task,
            isFav: false
        }
        tasks.value.push(newTask);

        const res = await $fetch('http://localhost:3000/tasks',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        if(res.error){
         console.log(res.error);
        }
    }

    const deleteTask = async (id) => {   
        tasks.value = tasks.value.filter(task => task.id !== id);
        console.log("Delete Task: " + id);

        const res = await $fetch('http://localhost:3000/tasks/' + id,{
            method: 'DELETE',
        })
        if(res.error){
         console.log(res.error);
        }
    };

    const addTasktoFav = async (id) => {
        const task = tasks.value.find(task => task.id === id);
        task.isFav = !task.isFav;

        const res = await $fetch('http://localhost:3000/tasks/' + id,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {isFav: task.isFav })
        })
        if(res.error){
         console.log(res.error);
        }
    }

    //swap position of tasks in array
    const moveTask = async (fromIndex, toIndex) => {
        // const fromItem = tasks.value[fromIndex];
        // const toItem = tasks.value[toIndex];
        // tasks.value.splice(fromIndex, 1, toItem);
        // tasks.value.splice(toIndex, 1, fromItem);
        console.log("Move Task: " + fromIndex + " to " + toIndex);
    }

    return { tasks, favs, favCount, totalCount, getTasks, addTask, deleteTask, addTasktoFav, moveTask }
})