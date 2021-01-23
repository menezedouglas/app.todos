export default [
    {
        name: 'login',
        path: '/login',
        component: () => import('./pages/login.vue')
    },
    {
        name: 'signup',
        path: '/signup',
        component: () => import('./pages/signup.vue')
    },
]
