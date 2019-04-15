import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from './routes'
import { store } from './store/store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuetify)
const router = new VueRouter({routes});
Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App)

}).$mount('#app')
