<template>
  <TopNav />
  <router-view/>
</template>

<script>
import TopNav from '@/components/TopNav.vue'

export default {
  components: {
    TopNav
  }
}
</script>
