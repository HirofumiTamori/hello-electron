const Vue = require('vue')

Vue.component('app-title',{
    template: '<h1>Vue: {{title}}</h1>',
    props: [
        'title',
    ]
})

let app = new Vue({
    el: '#app',
    data: {
        message1: 'Hello',
        message2: 'World !'
    }
})
