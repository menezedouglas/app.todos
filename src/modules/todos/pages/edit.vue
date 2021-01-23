<template>
  <div>
    <FormTodo :edit="true" :data="form" @send="save($event)" />
  </div>
</template>

<script>
import FormTodo from '../components/todo_form'
import * as error from "@/modules/error"
import { mapActions } from 'vuex'
export default {
  name: "edit",
  data () {
    return {
      form: {
        title: '',
        description: '',
        fixed: ''
      }
    }
  },
  components: {
    FormTodo,
  },
  methods: {
    ...mapActions('todos', ['ActionUpdateTodo']),
    getTodo () {
      let todo = this.$store.getters['todos/getTodo']
      if(!todo.title) this.$router.push({ name: 'Início' })
      this.form = todo
    },
    async save (data) {
      try {
        await this.ActionUpdateTodo(data)
        this.$router.push({ name: 'Início' })
      } catch (err) {
        error.showError(err)
      }
    }
  },
  created () {
    this.getTodo()
  }
}
</script>

<style scoped>

</style>
