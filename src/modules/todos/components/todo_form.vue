<template>
  <div class="row">
    <div class="col-12">
      <div class="form-floating mb-3">
        <input
            id="todo_title"
            type="text"
            class="form-control"
            placeholder="Digite um título"
            v-model="form.title"
        />
        <label
            for="todo_title"
        >
          Digite um título
        </label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating">
        <textarea
            id="todo_dsc"
            class="form-control"
            style="height: 100px"
            v-model="form.description"
            placeholder="Agora, digite aqui a tarefa que deseja fazer..."
        />
        <label
            for="todo_dsc"
        >
          Agora, digite aqui a tarefa que deseja fazer...
        </label>
      </div>
    </div>
    <div class="col-auto mt-4">
      <div class="form-check form-switch">
        <input
            id="fixed_todo"
            class="form-check-input"
            type="checkbox"
            v-model="form.fixed"
        >
        <label
            class="form-check-label"
            for="fixed_todo"
            v-html="form.fixed ? 'Ótimo, ele ficará fixado!' : 'Deseja fixar este ToDo?' "
        />
      </div>
    </div>
    <div class="col-auto mt-3">
      <router-link to="/">
        <button class="btn btn-outline-secondary">
          Ir ao Início
        </button>
      </router-link>
    </div>
    <div class="col mt-3">
      <button type="button" @click="send" class="btn btn-success w-100" v-html="edit ? 'Salvar Alterações' : 'Criar ToDo'" />
    </div>
  </div>
</template>

<script>
export default {
  name: "todo_form",
  props: ['edit', 'data'],
  data () {
    return {
      form: {
        title: '',
        description: '',
        fixed: false
      }
    }
  },
  methods: {
    send () {
      this.$emit('send', this.form)
    }
  },
  created () {
    if(this.edit) {
      this.form = this.data
    }
  }
}
</script>

<style scoped>

</style>
