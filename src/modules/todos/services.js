export default {
    index: {
        method: 'get',
        url: 'todos'
    },
    create: {
        method: 'post',
        url: 'todos/create'
    },
    show: {
        method: 'get',
        url: 'todos/show',
    },
    update: {
        method: 'put',
        url: 'todos/update',
    },
    delete: {
        method: 'get',
        url: 'todos/delete'
    }
}
