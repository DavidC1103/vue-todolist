const {createApp} = Vue;


createApp({

    data(){
        return{
            tasks:[],
            taskAdd : ''
        
        }
    },

    methods:{
        newTask(){
            const addTask = {
                text:this.taskAdd,
                done: false
            }

            this.tasks.unshift(addTask)
            this.taskAdd =''
            console.log(this.taskAdd);            
        },

        removeTask(index){
            if(this.tasks[index].done){
                this.tasks.splice(index,1)
            }

        }
    }





}).mount('#app')


