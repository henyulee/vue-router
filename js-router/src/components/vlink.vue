<template>
	<a :href='href' :class="{'active': isActive }" @click="go">
		<slot></slot>
	</a>
</template>
<script>
	import routes from '../router'

	export default {
		props:{
			href:String,
			required:true
		},
		computed:{
			isActive(){
				return this.href === this.$root.currentPage;
			}
		},
		methods:{
			go(e){
				e.preventDefault()
		        this.$root.currentPage = this.href
		        window.history.pushState(
		          null,
		          routes[this.href],
		          this.href
		        )
			}
		}
	}
</script>

<style scoped>
	.active{
		color:#105CA9;
	}
</style>