import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '@/components/content/MainContent.vue')
const Profile = () => import(/* webpackChunkName: "profile" */ '@/components/content/Profile.vue')
const Gallery = () => import(/* webpackChunkName: "gallery" */ '@/components/content/Gallery.vue')
const Edit = () => import(/* webpackChunkName: "edit" */ '@/components/content/Edit.vue')
const Check = () => import(/*webpackChunkName: "check" */ '@/components/content/Check.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
    children: [
      {
        path: '/edit',
        name: 'edit',
        component: Edit
      },
      {
        path: '/check',
        name: 'check',
        component: Check
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
