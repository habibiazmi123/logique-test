<template>
  <div
    v-if="open"
    class="min-h-screen bg-black bg-opacity-80 absolute left-0 top-0 right-0 bottom-0"
  >
    <button @click="onClose" class="absolute right-5 top-5">
      <img src="../assets/x.svg" alt="ngmusic" />
    </button>
    <div class="flex h-full justify-center items-center flex-col">
      <div class="flex w-full flex-col justify-center items-center">
        <input
          v-model="keyword"
          placeholder="Artist / Album / Title"
          type="text"
          class="bg-white w-5/6 text-sm text-center py-4 rounded-full mb-4 text-gray-500"
        />
        <button
          @click="onSearch"
          class="button w-5/6 text-sm text-center py-4 rounded-full text-white bg-opacity-20"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: Boolean,
    close: Function,
  },
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.keyword);
      this.$emit("close");
    },
    onClose() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.button {
  background-image: linear-gradient(153deg, #712bda, #a45deb 100%);
}
</style>
