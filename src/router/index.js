import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '@/components/content/main/MainContent.vue')
const Profile = () => import(/* webpackChunkName: "profile" */ '@/components/content/profile/Profile.vue')
const Gallery = () => import(/* webpackChunkName: "gallery" */ '@/components/content/gallery/Gallery.vue')
const Edit = () => import(/* webpackChunkName: "edit" */ '@/components/content/gallery/Edit.vue')
const Check = () => import(/*webpackChunkName: "check" */ '@/components/content/gallery/Check.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
