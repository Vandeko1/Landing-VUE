import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(VueAxios, axios)
app.mount('#app');

app.config.globalProperties.$axios = axios;