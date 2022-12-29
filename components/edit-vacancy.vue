<template>
  <!-- drawer component -->
  <div
    id="drawer-form"
    class="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 right-0 top-0"
    tabindex="-1"
    aria-labelledby="drawer-form-label"
  >
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      Create/Edit
    </h5>
    <button
      type="button"
      data-drawer-dismiss="drawer-form"
      aria-controls="drawer-form"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      @click="closeButtonHandler"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <form action="#" class="mb-6">
      <div class="mb-6">
        <label
          for="title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Title</label
        >
        <input
          type="text"
          id="title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
          required
          v-model="title"
        />
      </div>
      <div class="mb-6">
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Description</label
        >
        <textarea
          id="description"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write description..."
          v-model="description"
        ></textarea>
      </div>
      <div class="relative mb-6">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="date"
          v-model="shiftdate"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
          placeholder="Select date"
        />
      </div>
      <div class="flex mb-4 -space-x-4">
        <img
          class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
          src="/docs/images/people/profile-picture-5.jpg"
          alt=""
        />
        <img
          class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
          src="/docs/images/people/profile-picture-2.jpg"
          alt=""
        />
        <img
          class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
          src="/docs/images/people/profile-picture-3.jpg"
          alt=""
        />
        <img
          class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
          src="/docs/images/people/profile-picture-4.jpg"
          alt=""
        />
      </div>
      <button
        type="button"
        class="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="saveButtonHandler"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditVacancy',
  data() {
    return {
      title: '',
      description: '',
      shiftdate: null,
    }
  },
  methods: {
    saveButtonHandler() {
      this.$emit('create', {
        title: this.title,
        description: this.description,
        shiftdate: this.shiftdate,
      })
    },
    closeButtonHandler() {
      this.$emit('close')
    },
  },
}
</script>

<style></style>
