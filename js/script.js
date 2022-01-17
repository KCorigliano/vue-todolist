new Vue({
    el:'#app',
    data: {
        toDoList: [
            {
                text:'Fare i compiti',
                done: false
            },
            {
                text:'Fare la spesa',
                done: true
            },
            {
                text:'Fare il bucato',
                done: false
            },
        ],
        newText: '',
    },
    methods:{
        addText: function(){
            const newObject = {
                text: this.newText[0].toUpperCase() + this.newText.substring(1),
                done:false,
            };
            this.toDoList.push(newObject);
            this.newText='';
        },
        removeObject: function(i){
            this.toDoList.splice(i, 1);
        },
        addDone: function(i){
            this.toDoList[i].done=!this.toDoList[i].done;
        }
    }
})