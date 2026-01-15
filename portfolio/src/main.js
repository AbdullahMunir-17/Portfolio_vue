import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'   // 👈 Tailwind MUST be here

createApp(App).use(router).mount('#app')
