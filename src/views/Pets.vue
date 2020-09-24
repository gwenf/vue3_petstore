<template>
  <div class="row mt-5">
    <div class="col-sm-8 offset-sm-2">
      <h1>Pets</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-8 offset-sm-2">
      <PetTable />
    </div>
  </div>
</template>

<script>
import PetTable from '@/components/PetTable.vue'

export default {
  name: 'pets',
  components: {
    PetTable
  }
}
</script>
