import './lib/xue.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'

import IconSvg from "./components/Icon.vue"

const app = createApp(App)
app.component('icon-svg', IconSvg)

app.use(router)
app.mount('#app')
app.component('Markdown', Markdown)
