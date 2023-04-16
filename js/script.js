const {createApp} = Vue;


createApp({

    data(){
        return{
            tasks:[]
        

        }
    },
    
    methods:{
        newTask(){
            const addTask = {
                text:'aaaaaaa',
                done: true
            }
            console.log(addTask);
            this.tasks.unshift(addTask)
        }
    }





}).mount('#app')


