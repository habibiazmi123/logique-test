<template>
  <div class="shadow bg-white rounded overflow-hidden w-full h-36 p-2 mb-4">
    <div class="flex h-full">
      <div class="flex-none w-32 relative">
        <img
          :src="data.artworkUrl100"
          alt=""
          class="absolute inset-0 w-full h-full object-cover rounded-md"
          loading="lazy"
        />
      </div>
      <div class="flex w-full flex-col justify-between p-2">
        <div class="flex flex-wrap">
          <div class="w-full flex-none text-sm font-medium text-slate-700">
            {{ this.data.artistName }}
          </div>
          <h5 class="flex-auto text-sm font-semibold text-slate-900">
            {{ this.data.trackName }}
          </h5>
        </div>
        <div class="flex justify-between items-center">
          <div>
            <label class="tag">{{ this.data.primaryGenreName }}</label>
          </div>
          <div class="flex">
            <img src="../assets/currency-dollar.svg" alt="ngmusic" />
            <span class="price ml-1 text-sm font-medium">{{
              this.data.trackPrice
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.tag {
  @apply text-white px-2 py-1 text-sm rounded-full;
  background-color: #10b981;
}

.price {
  color: #f5b014;
}
</style>
