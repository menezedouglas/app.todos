export default {
    login: {
        method: 'post',
        url: 'auth/login'
    },
    loadSession: {
        method: 'get',
        url: 'auth/check'
    },
    createAccount: {
        method: 'post',
        url: 'user/account/create'
    }
}
