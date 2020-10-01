<template>
  <div class="row">
    <div class="col">
      <form>
        <div class="form-group row">
          <label for="name-input" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input v-model="name" type="text" class="form-control" id="name-input">
          </div>
        </div>
        <div class="form-group row">
          <label for="age-input" class="col-sm-2 col-form-label">Age</label>
          <div class="col-sm-10">
            <input v-model="age" type="number" class="form-control" id="age-input">
          </div>
        </div>
        <div class="form-group row">
          <label for="color-input" class="col-sm-2 col-form-label">Color</label>
          <div class="col-sm-10">
            <input v-model="color" type="color" class="form-control" id="color-input">
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Species</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input v-model="species" class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="cat" checked>
                <label class="form-check-label" for="gridRadios1">
                  Dog
                </label>
              </div>
              <div class="form-check">
                <input v-model="species" class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="dog">
                <label class="form-check-label" for="gridRadios2">
                  Cat
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input v-model="gender" class="form-check-input" type="radio" name="gender" id="gender-choice1" value="cat" checked>
                <label class="form-check-label" for="gender-choice1">
                  Female
                </label>
              </div>
              <div class="form-check">
                <input v-model="gender" class="form-check-input" type="radio" name="gender" id="gender-choice2" value="dog">
                <label class="form-check-label" for="gender-choice2">
                  Male
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <label for="notes-input" class="col-sm-2 col-form-label">Notes</label>
          <div class="col-sm-10">
            <textarea v-model="notes" class="form-control" id="notes-input"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button @click.prevent="submit" type="submit" class="btn btn-primary">
              Submit
            </button>
            {{ formData }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export default {
  setup (props, context) {
    const state = reactive({
      name: '',
      age: 0,
      color: '',
      species: '',
      gender: '',
      notes: ''
    })
    const formData = toRefs(state)

    const store = useStore()

    function submit () {
      console.log('submitted', state)
      store.commit('addPet', state)
    }

    return {
      ...formData,
      submit
    }
  },
  beforeUnmount () {
    console.log(this.$store.state)
  }
}
</script>
