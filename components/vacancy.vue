<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg mb-8">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        {{ vacancy.title }}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        {{ vacancy.description }}
      </p>
    </div>
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Dates</h3>
      <div
        v-for="shift in vacancy.dates"
        :key="shift.shiftdate"
        class="bg-gray-900 text-white p-4 m-4 text-sm font-medium grid grid-cols-5 gap-3 rounded-md"
      >
        <div>{{ shift.shiftdate }}</div>
        <div>{{ shift.starttime }}</div>
        <div>{{ shift.endtime }}</div>
        <div>{{ shift.type }}</div>
        <div>{{ shift.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vacancy',
  props: {
    vacancy: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
