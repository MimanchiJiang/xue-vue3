import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import IconSvg from "./components/Icon.vue"
import { router } from './router';


const app = createApp(App)
app.component('icon-svg', IconSvg)

app.use(router)
app.mount('#app')

