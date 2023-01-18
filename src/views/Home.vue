<template>
  <div class="section">
    <div class="h-64 flex items-center flex-grow justify-center">
      <img src="../assets/logo.svg" alt="ngmusic" />
    </div>
    <div class="flex flex-col justify-center py-4">
      <input
        v-model="keyword"
        placeholder="Artist / Album / Title"
        type="text"
        class="bg-white text-sm text-center mx-10 py-4 rounded-full mb-4 text-gray-500"
      />
      <button
        @click="onSearch"
        class="bg-white text-sm text-center mx-10 py-4 rounded-full text-white bg-opacity-20"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    onSearch() {
      this.$router.push({ name: "Result", query: { term: this.keyword } });
    },
  },
};
</script>

<style scoped>
.section {
  @apply min-h-screen flex flex-col;
  background-image: linear-gradient(153deg, #712bda, #a45deb 100%);
}
</style>
