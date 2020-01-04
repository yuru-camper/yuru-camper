import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Works from './views/Works.vue'
import Contact from './views/Contact.vue'
import Cansat from './views/Cansat.vue'
import DeepLearning from './views/DeepLearning.vue'
import Shodo from './views/Shodo.vue'
import Photos from './views/Photos.vue'
import Others from './views/Others.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/cansat',
      name: 'cansat',
      component: Cansat
    },
    {
      path: '/deeplearning',
      name: 'deeplearning',
      component: DeepLearning
    },
      {
          path: '/shodo',
          name: 'shodo',
          component: Shodo
      },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
    {
      path: '/others',
      name: 'others',
      component: Others
    }
  ]
})
