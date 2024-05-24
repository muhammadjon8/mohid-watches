<script>
export default {
  data() {
    return {
      text_color: "text-[#8B8E99]",
      images: ["./public/apple.png", "./public/apple.png", "./public/apple.png"],
      watchName: ["Apple", "Xiaomi", "FitBit"],
      watchInfo: [
        "Apple is one of the most famous smart watches providing company.",
        "Xiaomi smart watches are produced by MI company.",
        "FitBit smart watches are best for their health and fitness features.",
      ],
    };
  },
};
</script>

<template>
  <div class="w-100% h-[877px] bg-main-bg">
    <div class="container">
      <nav class="flex items-center justify-between py-5">
        <h3 class="text-white">Logo</h3>
        <div class="flex gap-5 links">
          <a href="#">Home</a>
          <a href="#">Brands</a>
          <a href="#">Recent Products</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </div>
        <div class="flex gap-3">
          <button>
            <img src="./assets/search.svg" alt="" />
          </button>
          <button>
            <img src="./assets/person.svg" alt="" />
          </button>
          <button>
            <img src="./assets/cart.svg" alt="" />
          </button>
        </div>
      </nav>
      <section class="flex items-center py-10">
        <div class="w-[60%]">
          <h1
            class="text-[64px] text-white font-serif font-bold w-[457px] my-3"
          >
            Discover Most Suitable Watches
          </h1>
          <h3 class="text-[#8B8E99] w-[456px] my-3">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </h3>
          <div
            class="flex items-center py-4 px-3 w-[443px] rounded-xl bg-white justify-between my-6"
          >
            <div class="flex">
              <img
                src="./assets/blue-search.svg"
                alt=""
                class="w-[21px] h-[21px]"
              />
              <input
                type="text"
                placeholder="Find the best brands"
                class="px-4 mr-4 focus:outline-none w-[300px]"
              />
            </div>
            <button class="bg-[#3858D6] text-white px-6 py-2 rounded-xl">
              Search
            </button>
          </div>
        </div>
        <div class="w-[461px] h-[563px]">
          <img src="/main-soat.png" alt="" />
        </div>
      </section>
    </div>
  </div>
  <div>
    <div class="container">
      <div class="md:flex py-16 gap-5">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="flex items-center bg-[#F6F6F6] rounded-3xl p-10 gap-7"
        >
          <img :src="img" :alt="watchName[index]" />
          <div>
            <h3 class="text-4xl font-bold mb-2">{{ watchName[index] }}</h3>
            <p class="text-[#8B8E99] font-medium text-base max-w-[200px]">
              {{ watchInfo[index] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.links a {
  @apply text-[#8B8E99];
}
</style>
