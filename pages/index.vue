<template>
  <div class="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
    <div class="mb-6 flex items-center justify-between">
      <h3 class="text-3xl font-bold underline">Shifts</h3>
      <app-button text="Add shift"></app-button>
    </div>

    <vacancy></vacancy>
  </div>
</template>
<script>
import AppButton from '../components/general/app-button.vue'
import vacancy from '../components/vacancy.vue'
export default {
  components: { vacancy, AppButton },
  name: 'IndexPage',
}
</script>
