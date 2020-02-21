import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)

export default new router ({
    mode:'history',
    base: process.env.BASE_URL,
    routes: [
    {
        path:'/',
        name:'home',
        components: () => import(/* webpackChunkName: "home" */ './components/Home.vue')
    },
    {
        path:'/about',
        name:'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
        components: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    },
    {
        path:'/skill',
        name:'skill',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
        components: () => import(/* webpackChunkName : "skill" */ './components/Skill.vue')
    },
    {
        path:'/contact',
        name:'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
        components: () => import(/* webpackChunkName: "contact" */ './components/Contact.vue')
    }
    ]
})