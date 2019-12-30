import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Blog from '../views/Blog/Blog.vue'
import BlogDetail from '../views/Blog/BlogDetail.vue'
import Contact from '../views/Contact/Contact.vue'
import Portofolio from '../views/Portofolio/Portofolio.vue'
import Login from '../views/Login/Login.vue'
import Admin from '../views/Admin/Admin.vue'
import Message from '../views/Message/Message.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/portofolio',
    name: 'portofolio',
    component: Portofolio
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/message',
    name: 'message',
    component: Message,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/post/:title',
    name: 'BlogDetail',
    component: BlogDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  
  // More code ...
  next();
});

export default router
