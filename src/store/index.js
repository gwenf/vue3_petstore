import { createStore } from 'vuex'

export default createStore({
  state: {
    pets: []
  },
  mutations: {
    addPet (state, pet) {
      state.pets.push(pet)
    }
  },
  actions: {
  },
  modules: {
  }
})
