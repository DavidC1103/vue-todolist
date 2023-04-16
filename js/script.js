const {createApp} = Vue;


createApp({

    data(){
        return{
            tasks:[
            {
                text:'Ciao',
                done:true
            },
            {
                text:'Ciaooooo',
                done:false
            },
            {
                text:'Ciaoooo',
                done:true
            },
        ]

        }
    }



}).mount('#app')


