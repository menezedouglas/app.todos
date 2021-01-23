import store from '../store'

export default async (to, from, next) => {
    document.title = `${to.name} - To Do's`
    if(to.name !== 'login' && to.name !== 'signup') {
       try {
           await store.dispatch('auth/ActionCheckToken')
           next();
       } catch (err) {
           next({ name: 'login' })
       }
    } else {
        try {
            await store.dispatch('auth/ActionCheckToken')
            next({ name: 'Início' });
        } catch (err) {
            next()
        }
    }
}
