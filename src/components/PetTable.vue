<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Color</th>
        <th scope="col">Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(pet, i) in pets" :key="i">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['pets'])
  }
}
</script>
