export const useTaskStore = defineStore('taskStore',{
    state: () => ({
        tasks: [
            {id: 1, title: 'Buy some milk', isFav: true},
            {id: 2, title: 'Buy some bread', isFav: true},
            {id: 3, title: 'Buy some cheese', isFav: false}
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
        addTask(task){
            const newTask = {
                id: Math.floor(Math.random() * 100000),
                title: task,
                isFav: false
            }
            this.tasks.push(newTask);
        }
    }
})