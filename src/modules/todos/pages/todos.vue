<template>
    <div class="row">
      <div class="col mb-2">
        <h2 class="text-secondary">Meus To Do's</h2>
      </div>
      <div class="col-auto">
        <router-link to="/todos/criar">
          <button class="btn btn-sm btn-success">
            Novo To Do
          </button>
        </router-link>
      </div>
      <div class="row">
        <div
            class="col-12"
            style="text-align: left;"
            v-for="todo in todos"
            v-bind:key="todo.id"
        >
          <div v-if="todo.fixed === 1" class="card border-primary mb-2">
            <div class="card-header">
              <div class="row">
                <div class="col">
                <span class="badge bg-primary">
                  Fixado
                </span>
                </div>
                <div class="col-auto text-muted">
                  <small>{{ todo.created_at }}</small>
                </div>
                <div class="col-auto">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#" @click="edit(todo.id)">Editar</a></li>
                      <li><a class="dropdown-item text-danger" href="#" @click="del(todo.id)">Deletar</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body text-primary">
              <h5 class="card-title">{{ todo.title }}</h5>
              <p class="card-text">{{ todo.description }}</p>
            </div>
          </div>
          <div v-if="todo.fixed === 0" class="card mb-2">
            <div class="card-header">
              <div class="row">
                <div class="col">
                <span class="badge bg-secondary">
                  Normal
                </span>
                </div>
                <div class="col-auto text-muted">
                  <small>{{ todo.created_at }}</small>
                </div>
                <div class="col-auto">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#" @click="edit(todo.id)">Editar</a></li>
                      <li><a class="dropdown-item text-danger" href="#" @click="del(todo.id)">Deletar</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ todo.title }}</h5>
              <p class="card-text">{{ todo.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="todos.length === 0" class="row">
        <div class="col-12">
          <div class="alert alert-info">
            Você não tem To Do's
            <router-link to="/todos/criar">
              <a href="#">crie um agora!</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import { showError } from '@/modules/error'
export default {
  name: 'Todos',
  data () {
    return {
      todos: []
    }
  },
  methods: {
    ...mapActions('todos', ['ActionSetTodos', 'ActionSetTodo', 'ActionDeleteTodo']),
    showError,
    async edit(id) {
      try {
        await this.ActionSetTodo(id)
        this.$router.push({ name: 'Editar ToDo' })
      } catch (error) {
        this.showError(error)
      }
    },
    async del(id) {
      let question = confirm('Deseja realmente deletar este ToDo?');
      if(question) {
        try {
          await this.ActionDeleteTodo(id)
          this.getTodos()
        } catch (error) {
          this.showError(error)
        }
      }
    },
    async getTodos () {
      try {
        await this.ActionSetTodos()
        this.todos = this.$store.getters['todos/getTodos']
      } catch (error) {
        this.showError(error)
      }
    },
  },
  mounted () {
    this.getTodos();
  }
}
</script>
