const app = Vue.createApp({
	data() {
		return {
            // Welcome Message
			welcomeMessage: "Hello There!",
            // Image
            imageSrc:"obi-wan.png",
		}
	},
});

app.mount('#root');
