<template>
  <div class="row mt-5">
    <div class="col-sm-8 offset-sm-2">
      <h1>Enter Your Pet's Info</h1>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-sm-8 offset-sm-2">
      <NewPetForm />
    </div>
  </div>
</template>

<script>
import NewPetForm from '@/components/NewPetForm.vue'

export default {
  components: {
    NewPetForm
  }
}
</script>
