new Vue({
	el: '#challenge',
	data: {
		class1: 'emphasis'
	},
	methods: {
		startEffect() {
			setInterval(() => {
				this.class1 = this.class1 == 'emphasis' ? 'shrink' : 'emphasis'
			}, 1000)
		},
		startProgress() {

		}
	}
})
