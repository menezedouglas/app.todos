<template>
  <div>
    <h2 class="text-muted">Novo ToDo</h2>
    <hr class="my-2 mb-3">
    <TodoForm @send="submit($event)" />
  </div>
</template>

<script>
import TodoForm from '../components/todo_form'
import * as error from '@/modules/error'
import { mapActions } from 'vuex'
export default {
  name: "create",
  components: {
    TodoForm,
  },
  methods: {
    ...mapActions('todos', ['ActionCreateTodo']),
    async submit (data) {
      try {
        if(data.fixed === '') data.fixed = false
        await this.ActionCreateTodo(data)
        this.$router.push({ name: 'Início' })
      } catch (err) {
        error.showError(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
