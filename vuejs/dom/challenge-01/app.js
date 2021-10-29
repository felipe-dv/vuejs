new Vue({
    el: '#challenge',
    data: {
    name: 'Felipe',
    age: 18,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
    },
    methods: {
    age_triple() {
        return this.age * 3
    },
    random_num() {
        return Math.random()
    }
    }
})