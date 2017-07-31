##	本项目主要是基于vue的主要路由实现方式来进行操作

# 1、不使用vue-router，使用js原生方法来实现路由跳转

	具体见：js-router

# 2、使用CDN脚本
	详情见cdn-router
	关于router-link的常用属性介绍：http://blog.csdn.net/tanga842428/article/details/53052970

# 3、使用vue-router

	// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
 
	// 1. 定义（路由）组件。
	// 可以从其他文件 import 进来
	const Foo = { template: '<div>foo</div>' }
	const Bar = { template: '<div>bar</div>' }
	 
	// 2. 定义路由
	// 每个路由应该映射一个组件。 其中"component" 可以是
	// 通过 Vue.extend() 创建的组件构造器，
	// 或者，只是一个组件配置对象。
	// 我们晚点再讨论嵌套路由。
	const routes = [
	  { path: '/foo', component: Foo },
	  { path: '/bar', component: Bar }
	]
	 
	// 3. 创建 router 实例，然后传 `routes` 配置
	// 你还可以传别的配置参数, 不过先这么简单着吧。
	const router = new VueRouter({
	  routes // （缩写）相当于 routes: routes
	})
	 
	// 4. 创建和挂载根实例。
	// 记得要通过 router 配置参数注入路由，
	// 从而让整个应用都有路由功能
	const app = new Vue({
	  router
	}).$mount('#app')
	 
	// 现在，应用已经启动了！