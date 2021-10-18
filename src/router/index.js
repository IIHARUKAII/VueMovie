import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import Ticket from '../components/Ticket.vue'
import movie from '../components/movie.vue'

import {BootstrapVue , IconsPlugin} from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import axios from "axios"
import Vueaxios from 'vue-axios'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)
Vue.use(axios, Vueaxios)

const routes = [
  {
    path: '/',
    name: 'movie',
    component: movie
  },
  {
    path: '/ticket/:id',
    name: 'Ticket',
    component: Ticket
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
