export default [
    {
        name: 'Início',
        path: '/',
        component: () => import('./pages/todos.vue')
    },
    {
        name: 'Novo ToDo',
        path: '/todos/criar',
        component: () => import('./pages/create.vue')
    },
    {
        name: 'Editar ToDo',
        path: '/todos/editar',
        component: () => import('./pages/edit.vue')
    }
]
