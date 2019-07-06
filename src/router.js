import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home.vue';
import Finance from './components/finance.vue';
import Keto from './components/keto.vue';
import _404 from './components/404.vue';

Vue.use(Router);
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/finance',
            name: 'finance',
            component: Finance
        },
        {
            path: '/diet',
            name: 'keto',
            component: Keto
        },

        { path: "*", component:_404 }
    ]
});

export default router;
