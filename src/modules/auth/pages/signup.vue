<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="alert alert-warning">
          <h4 class="alert-heading">Um aviso antes de criar uma conta!</h4>
          <p>
            Este sistema está em desenvolvimento, algumas funções serão adicionadas futuramente.
            Ao se cadastrar, você aceita os
            <a target="_blank" href="/termo_uso_privacidade.pdf">
              termos de uso e privacidade
            </a>
            desta aplicação.
          </p>
        </div>
      </div>
    </div>
    <small class="text-secondary mt-3">Tudo certo?</small>
    <h3 class="text-secondary">VAMOS CRIAR SUA CONTA!</h3>
    <hr class="my-2 mb-4">
    <form action="">
      <div class="row">
        <div class="col-12">
          <div class="form-floating mb-3">
            <input type="text" name="name" class="form-control" id="floatingName" placeholder="name@example.com">
            <label for="floatingName">Digite seu nome</label>
          </div>
        </div>
        <div class="col-12">
          <div class="form-floating mb-3">
            <input type="email" name="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
            <label for="floatingEmail">Digite um e-mail</label>
          </div>
        </div>
        <div class="col-12">
          <div class="form-floating">
            <input type="password" name="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Agora, sua senha</label>
          </div>
        </div>
        <div class="col-12 d-grid gap-2 mt-3">
          <button class="btn btn-lg btn-success">
            Criar sua conta
          </button>
          <small class="my-2">
            Já tem uma conta? <router-link to="/login">Vamos entrar!</router-link>
          </small>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "signup"
}
</script>

<style scoped>

</style>
