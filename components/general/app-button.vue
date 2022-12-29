<template>
  <button
    class="h-10 px-10 font-semibold rounded-md bg-black text-white"
    type="submit"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      default: '',
      type: String,
    },
  },
}
</script>

<style></style>
