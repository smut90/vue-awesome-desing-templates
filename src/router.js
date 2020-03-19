import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/components/Home'

Vue.use(Router);

let router = new Router({
        mode: 'history',

        routes: [
            {
                path: '*',
                redirect: '/home'
            },
            {
                path: '/home',
                name: 'Home',
                component: Home,
                meta: {
                    guest: true
                }
            }
        ]

    },
);

export default router
