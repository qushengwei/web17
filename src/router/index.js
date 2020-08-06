import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabbar from '@/components/TabBar.vue'
import App from '@/App.vue'
import App2 from '@/components/App2.vue'
import App3 from '@/components/App3.vue'
import App4 from '@/components/App4.vue'
import App4_1 from '@/components/App4_1.vue'
import App4_2 from '@/components/App4_2.vue'
import App5 from '@/components/App5.vue'
import App6 from '@/components/App6.vue'
import App2_1 from '@/components/App2_1.vue'
Vue.use(VueRouter)

const routes = [{

        path: '/',
        name: 'App2',
        component: App2,
    }, {
        path: '/App',
        name: 'App',
        component: App
    },
    {
        path: '/Tabbar',
        name: 'Tabbar',
        component: Tabbar
    },
    {
        path: '/App2',
        name: 'App2',
        component: App2
    },
    {
        path: '/App3',
        name: 'App3',
        component: App3
    }, {
        path: '/App4',
        name: 'App4',
        component: App4
    }, {
        path: '/App4_1',
        name: 'App4_1',
        component: App4_1
    } ,{
        path: '/App4_2',
        name: 'App4_2',
        component: App4_2
    },{
        path: '/App5',
        name: 'App5',
        component: App5
    },{
        path: '/App6',
        name: 'App6',
        component: App6
    },{
        path: '/App2_1',
        name: 'App2_1',
        component: App2_1
    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router