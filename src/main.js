import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Carousel3d from 'vue-carousel-3d';
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Carousel3d);
Vue.use(VueGlide)
Vue.prototype.$axios = axios
Vue.prototype.$keyapi = '3c3266bf0ea1f3b6659164a3af46ff98'
library.add([faUserSecret, faSmile])

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')