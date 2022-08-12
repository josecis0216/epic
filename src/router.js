// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Contact from '../views/Contact.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     component: About
//   },
//   {
//     path: '/contact',
//     name: 'Contact',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     component: Contact
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/general/HomePage.vue';
import AboutPage from './pages/general/AboutPage.vue';
import ContactPage from './pages/requests/ContactPage.vue';
// import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
// import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/home', component: HomePage },
        // {
        //     path: '/coaches/:id', component: CoachDetail, props: true, children: [
        //         { path: 'contact', component: ContactCoach }
        //     ]
        // },
        { path: '/about', component: AboutPage },
        { path: '/contact', component: ContactPage },
        // { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;
