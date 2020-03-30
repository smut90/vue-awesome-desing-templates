import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/components/Home'
import Home2 from '../src/components/HomeDesign02'

Vue.use(Router);

let router = new Router({
        mode: 'history',

        routes: [
            {
                path: '*',
                redirect: '/design1'
            },
            {
                path: '/design2',
                name: 'Home',
                component: Home,
                meta: {
                    guest: true
                }
            },
            {
                path: '/design1',
                name: 'Home2',
                component: Home2,
                meta: {
                    guest: true
                }
            }
        ]

    },
);

export default router
