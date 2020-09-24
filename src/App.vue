<template>
  <TopNav />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'

export default {
  components: {
    TopNav
  }
}
</script>
