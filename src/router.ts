import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from "./components/SwitchDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import TabsDemo from "./components/TabsDemo.vue"
import DialogDemo from "./components/DialogDemo.vue"
import Markdown from "./components/Markdown.vue"
import { h } from 'vue';
const history = createWebHashHistory()
const md = filename => h(Markdown, { path: `../markdown/${filename}`, key: filename })
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', redirect: '/doc/intro' },
                { path: 'intro', component: md('intro.md') },
                { path: 'get-started', component: md('get-started.md') },
                { path: 'install', component: md('install.md') },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },

            ]
        }
    ]
})
router.afterEach(() => {

})