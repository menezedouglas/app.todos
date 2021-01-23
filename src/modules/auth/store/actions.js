import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'

export const ActionDoLogin = ({ dispatch }, payload) => {
    return services.auth.login(payload).then(res => {
        dispatch('ActionSetUser', res.data.user)
        dispatch('ActionSetToken', `${res.data.token_type} ${res.data.access_token}`)
    })
}

export const ActionCheckToken = ({ dispatch, state }) => {
    if (state.token)
        return Promise.resolve(state.token)

    const token = storage.getLocalToken()

    if(!token) return Promise.reject()

    dispatch('ActionSetToken', token)
    return dispatch('ActiontLoadSession')
}

export const ActiontLoadSession = ({ dispatch }) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await services.auth.loadSession()
            dispatch('ActionSetUser', data)
            resolve()
        } catch (error) {
            dispatch('ActionSignOut')
            reject(error)
        }
    })
}

export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload, {root: false});
}

export const ActionSetToken = ({ commit }, payload) => {
    storage.setLocalToken(payload)
    storage.setHeaderToken(payload)
    commit(types.SET_TOKEN, payload, {root: false});
}

export const ActionSignOut = ({ dispatch }) => {
    storage.setHeaderToken('')
    storage.deleteLocalToken()
    dispatch('ActionSetUser', {})
    dispatch('ActionSetToken', '')
}
