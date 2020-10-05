import { createStore } from 'vuex'

export default createStore({
  state: {
    pets: []
  },
  getters: {
    filterBySpecies: state => (type) => {
      return state.pets.filter(pet => pet.species === type)
    }
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
