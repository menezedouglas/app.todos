<template>
    <div>
      <div class="row">
        <div class="col-12">
          <div class="alert alert-warning">
            <h4 class="alert-heading">Um aviso antes de entrar!</h4>
            <p>
              Este sistema está em desenvolvimento, algumas funções serão adicionadas futuramente.
            </p>
          </div>
        </div>
      </div>
      <small class="text-secondary mt-3">ChuChu beleza?</small>
      <h3 class="text-secondary">VAMOS ENTRAR!</h3>
      <hr class="my-2 mb-4">
      <form @submit.prevent="submit()">
        <div class="row">
          <div class="col-12">
            <div class="form-floating mb-3">
              <input
                  id="floatingInput"
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  placeholder="name@example.com"
                  required
              >
              <label for="floatingInput">Digite um e-mail</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating">
              <input
                  id="floatingPassword"
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
              />
              <label for="floatingPassword">Agora, sua senha</label>
            </div>
          </div>
          <div class="col-12 d-grid gap-2 mt-3">
            <button class="btn btn-lg btn-success">
              Entrar
            </button>
            <small class="my-2">
              Não tem uma conta? <router-link to="/signup">Vamos criar uma conta!</router-link>
            </small>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { showError } from '@/modules/error'
export default {
  name: 'login',
  data () {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions('auth', ['ActionSetUser', 'ActionDoLogin']),
    showError,
    async submit () {
      try {
        await this.ActionDoLogin(this.form)
        this.$router.push({ name: 'Início' })
      } catch (error) {
        this.showError(error)
      }
    }
  },
}
</script>
