import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import './assets/global.css'
import 'font-awesome/css/font-awesome.css'
import store from './store/index'
createApp(App).use(router).use(store).mount('#app')


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)