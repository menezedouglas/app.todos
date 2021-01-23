import * as types from './mutation-types'

export default {
    [types.SET_TODOS] (state, payload) {
        state.todos = payload
    },
    [types.SET_TODO] (state, payload) {
        state.todo = payload
    }
}
