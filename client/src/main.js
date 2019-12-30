import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/assets/style.scss'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
