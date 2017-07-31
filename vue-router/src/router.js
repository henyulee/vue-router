import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home'
import Table from '@/components/table'

Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    }
  ]
})