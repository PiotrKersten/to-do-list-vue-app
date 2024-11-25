import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 1500,
  newestOnTop: false,
})
app.mount('#app')
