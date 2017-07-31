<template>
	<div class="tabs">
		<ul>
			<v-link v-for = "(item,key) in routerInfo" href="key">
				{{ item }}
			</v-link>
		</ul>
		<slot></slot>
	</div>
</template>

<script>
	import VLink from './vlink.vue'
	import routes from '../router'
	exports default {
		data(){
			return {
				routerInfo: routes
			}
		}
		components: {
			VLink
		}
	}
</script>