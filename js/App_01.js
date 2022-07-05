Vue.component('todo-list',{
    template :'<p>This is a child component</p>'
})

Vue.component('todo-footer',{
    template: "<p>This is another child global component</p>"
});

let cmp = {
    template : "<p>This is another child local component</p>"
};

let app = new Vue({
    el: '#app',

    data: {
        message: 'This is a parent component'
    },

    components :{
        'todo-footer' : cmp
    }
});











