import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RandomQuotes from '../views/RandomQuotes.vue'
import ContactView from '../views/ContactView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {path: '/', name: 'home', component: HomeView },
    {path: '/about', name: 'about', component: AboutView },
    {path: '/quotes', name: 'quotes', component: RandomQuotes },
    {path: '/contact', name: 'contact', component: ContactView },
    {path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router