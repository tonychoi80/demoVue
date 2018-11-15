import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/IndexPage'
import Show from '@/components/ShowPage'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/:id',
      name: 'show',
      component: Show
    }
  ]
})
