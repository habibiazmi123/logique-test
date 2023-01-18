<template>
  <main class="section relative">
    <header class="header">
      <button>
        <img src="../assets/menu.svg" alt="ngmusic" />
      </button>
      <div>
        <img src="../assets/ngmusic.svg" alt="ngmusic" />
      </div>
      <button @click="openModal">
        <img src="../assets/search.svg" alt="ngmusic" />
      </button>
    </header>
    <div>
      <div
        v-if="keyword"
        class="keyword-label flex flex-row justify-center items-center my-10"
      >
        Search result for: <span class="keyword">{{ this.keyword }}</span>
      </div>
      <div class="p-4">
        <CardItem v-for="result in results" :data="result" />
      </div>
    </div>

    <SearchOverlay :open="open" @search="onSearch" @close="closeModal" />
  </main>
</template>

<script>
import axios from "axios";
import CardItem from "@/components/CardItem.vue";
import SearchOverlay from "@/components/SearchOverlay.vue";

export default {
  components: { CardItem, SearchOverlay },
  data() {
    return {
      open: false,
      keyword: "",
      results: [],
    };
  },
  mounted() {
    const { term } = this.$route.query;
    if (term) this.onSearch(term);
  },
  methods: {
    async onSearch(keyword) {
      const { data } = await axios.get(
        `https://itunes.apple.com/search?term=${keyword}&limit=5`
      );

      this.keyword = keyword;
      this.results = data.results;
    },
    openModal() {
      this.open = true;
    },
    closeModal() {
      this.open = false;
    },
  },
};
</script>

<style scoped>
.section {
  background-color: #f8fafc;
}

.header {
  @apply flex flex-row justify-between items-center pb-5 px-4 w-full h-20 border-b relative left-0 top-0 right-0;
  background-image: linear-gradient(153deg, #712bda, #a45deb 100%);
  border-bottom-left-radius: 50% 40%;
  border-bottom-right-radius: 50% 40%;
}

.section {
  @apply min-h-screen flex flex-col;
}

.keyword-label {
  @apply text-sm;
  color: #334155;
}

.keyword {
  @apply font-bold text-lg ml-2;
  color: #7b34dd;
}
</style>
