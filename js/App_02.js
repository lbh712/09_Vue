Vue.component('child-component', {
    props: ['propsdata'],
    template: "<p>{{propsdata}}</p>"
});

Vue.component('sibling-component',{
    props : ['propsdata'],
    template:"<p>{{propsdata}}</p>"
})

let app = new Vue({
    el: '#app',
    data: {
        Message: 'Hello Vue! passed from Parent Component',
        AnotherMessage : 'Hello Vue.js!!!'
    }    
});











