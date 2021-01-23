import services from '@/http'
import * as types from './mutation-types'

export const ActionSetTodos = ({ commit }) => {
    return services.todos.index().then(res => {

        res.data.map(todo => {
            let date = new Date(todo.created_at);
            todo.created_at = date.toLocaleString();
        })

        commit(types.SET_TODOS, res.data)
    })
}

export const ActionSetTodo = ({ commit }, payload) => {
    return services.todos.show({ id: payload }).then(res => {
        res.data.fixed = (parseInt(res.data.fixed) === 1)
        commit(types.SET_TODO, res.data)
    })
}

export const ActionCreateTodo = ({ dispatch }, payload) => {
    return services.todos.create(payload).then(() => {
        alert('ToDo criado com sucesso!')
        dispatch('todo/ActionSetTodos')
    })
}

export const ActionUpdateTodo = ({ dispatch }, payload) => {
    return services.todos.update(payload).then(() => {
        alert('ToDo atualizado com sucesso!')
        dispatch('todo/ActionSetTodos')
    })
}

export const ActionDeleteTodo = ({ dispatch }, payload) => {
    return services.todos.delete({ id: payload }).then(() => {
        alert('ToDo deletado com sucesso!')
        dispatch('todo/ActionSetTodos')
    })
}
