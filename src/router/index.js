import Vue from 'vue'
import Router from 'vue-router'
import Home  from '../component/main/Main.vue'
import Life   from '../component/life/Life.vue'

Vue.use(Router)

export default new Router({
  routes : [
     {
       path: '/',
       component: Home,
     },
     {
       path: '/life',
       component: Life
     }
  ],
  // remove # In Url ex) http://localhost:8080/#/table
  mode: 'history'
})
