<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Adopt a Pet</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link active" :to="{ path: '/' }">Home <span class="sr-only">(current)</span></router-link>
        <router-link class="nav-link" :to="{ path: '/pets/cats' }">Cats</router-link>
        <router-link class="nav-link" :to="{ path: '/pets/dogs' }">Dogs</router-link>

        <form class="form-inline my-2 my-lg-0">
          <router-link class="btn btn-primary" :to="{ path: '/add-pet' }">Add</router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
