<style>
@import 'styles/master.scss';
</style>

<template>
  <div id="app">
    <h1 class="p-5 my-1 text-muted">To Do's</h1>
    <div class="row">
      <div class="col-md-6 col-12 p-0" style="margin: 0 auto;">
        <div class="card border-0 shadow m-5">
          <div class="card-body">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
