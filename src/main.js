import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios';
// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.prototype.$axios = axios
Vue.prototype.$keyapi = '3c3266bf0ea1f3b6659164a3af46ff98'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')