export const useTaskStore = defineStore('taskStore',{
    state: () => ({
        tasks: [
        ],
        name : 'Trong',
    }),
    getters: {
        //Kiểu hàm này truy cập đc biến this
        favs(){
            return this.tasks.filter(task => task.isFav);
        },
        favCount(){
            return this.tasks.reduce((total, task) => {
                return task.isFav ? total + 1 : total;
            },0);
        },

        //Kiểu hàm này không truy cập đc biến this
        totalCount: (state) => {
            return state.tasks.length;
        }
    },
    actions: {
        //get Tasks from localhost
        async getTasks(){
            const res = await $fetch('http://localhost:3000/tasks');
            this.tasks = res;
        },
        addTask(task){
            const newTask = {
                id: Math.floor(Math.random() * 100000),
                title: task,
                isFav: false
            }
            this.tasks.push(newTask);

            const res = $fetch('http://localhost:3000/tasks',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            })
            if(res.error){
             console.log(res.error);
            }
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(task => task.id !== id);
            console.log("Delete Task: " + id);

            const res = $fetch('http://localhost:3000/tasks/' + id,{
                method: 'DELETE',
            })
            if(res.error){
             console.log(res.error);
            }
        },
        addTasktoFav(id){
            const task = this.tasks.find(task => task.id === id);
            task.isFav = !task.isFav;

            const res = $fetch('http://localhost:3000/tasks/' + id,{
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
    }
})