new Vue({
    el: '#challenge',
    data: {
        value: ''
    },
    methods: {
        showAlert() {
            window.alert('ALERT!!!')
        },
        changeValue() {
            this.value = event.target.value

        }
    }
})