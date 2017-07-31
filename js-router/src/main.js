import Vue from 'vue'
import Router from './router'

let app = new Vue({
	el: '#app',
	data(){
		return {
			currentPage:window.location.pathname
		}
	},
	computed: {
		matchingView(){
			let view = Router[this.currentPage];
			return view ? require('./page/'+ view +'.vue') : require('./page/404.vue') ;
		}
	},
	render(h){
		return h(this.matchingView);
	}
});

window.addEventListener("popstate",() = > {
	app.currentPage = window.location.pathname;
})
