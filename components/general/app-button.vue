<template>
  <button
    class="h-10 px-10 font-semibold rounded-md bg-black text-white"
    @click="onClickHandler"
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
  methods: {
    onClickHandler() {
      this.$emit('click')
    },
  },
}
</script>

<style></style>
