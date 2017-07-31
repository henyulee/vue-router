import Vue from 'vue'
import Router from './router'

import App from './App'

let app = new Vue({
	el: '#app',
	Router,
	template: '<App />',
	components:{
		App
	}
});
