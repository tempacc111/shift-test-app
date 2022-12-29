<template>
  <div class="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
    <div class="mb-6 flex items-center justify-between">
      <h3 class="text-3xl font-bold underline">Shifts</h3>
      <app-button
        text="Add shift"
        @click="() => (openedShiftForm = true)"
      ></app-button>
    </div>

    <vacancy
      v-for="vacancy in vacancies"
      :vacancy="vacancy"
      :key="vacancy.id"
    ></vacancy>

    <edit-vacancy
      v-show="openedShiftForm"
      @close="() => (openedShiftForm = false)"
      @create="createHandler"
    ></edit-vacancy>
  </div>
</template>
<script>
import EditVacancy from '../components/edit-vacancy.vue'
import AppButton from '../components/general/app-button.vue'
import vacancy from '../components/vacancy.vue'
export default {
  components: { vacancy, AppButton, EditVacancy },
  name: 'IndexPage',
  computed: {
    vacancies() {
      return this.$store.getters.getVacancies
    },
  },
  data() {
    return {
      openedShiftForm: false,
    }
  },
  methods: {
    createHandler(vacancy) {
      console.log(vacancy)
      this.$store.commit('ADD_VACANCY', vacancy)
      this.openedShiftForm = !this.openedShiftForm
    },
  },
}
</script>
