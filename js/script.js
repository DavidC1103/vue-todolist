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
        }
    }





}).mount('#app')


