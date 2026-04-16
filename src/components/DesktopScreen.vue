<template lang="">
  <div
    class="sticky-top vh-100 d-none d-sm-block col-sm-5 col-md-6 col-lg-7 col-xl-8 col-xxl-9 overflow-y-hidden m-0 p-0"
  >
    <div
      class="position-relative bg-white-black d-flex justify-content-center align-items-center vh-100"
    >
      <Carousel v-bind="config" class="position-absolute h-100 w-100 slide-desktop">
        <Slide
          v-for="(img, index) in images"
          :key="index"
        >
          <div class="carousel__item">
            <img
              :src="img"
              alt="bg"
              class="bg-cover-home"
              style="mask-image: none; opacity: 40%"
            />
          </div>
        </Slide>
      </Carousel>
      <div class="text-center p-5 bg-overlay-auto rounded-5" style="z-index: 10000">
        <h2 class="font-esthetic mb-4" style="font-size: 2rem">
          Quốc Tuấn &amp; Thu Hoài
        </h2>
        <p class="m-0" style="font-size: 1rem">Thứ Bảy, 02 Thắng 05 năm 2026</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/carousel.css";
const config = {
  itemsToShow: 1,
  gap: 5,
  mouseWheel: true,
  wrapAround: true,
  autoplay: 4000,
  slideEffect: "fade",
  transition: 2500,
};
const images = [
  '/assets/images/hoai-tuan/BTT_1911.webp',
  '/assets/images/hoai-tuan/BTT_1932.webp',
  '/assets/images/hoai-tuan/BTT_1952.webp',
  '/assets/images/hoai-tuan/BTT_2027.webp',
  '/assets/images/hoai-tuan/BTT_2044.webp',
  '/assets/images/hoai-tuan/BTT_2052.webp',
  '/assets/images/hoai-tuan/BTT_2095.webp',
  '/assets/images/hoai-tuan/BTT_2137.webp',
  '/assets/images/hoai-tuan/BTT_2185.webp',
  '/assets/images/hoai-tuan/BTT_2209.webp',
  '/assets/images/hoai-tuan/BTT_2213.webp',
  '/assets/images/hoai-tuan/BTT_2227.webp',
  '/assets/images/hoai-tuan/BTT_2232.webp',
  '/assets/images/hoai-tuan/BTT_2237.webp',
  '/assets/images/hoai-tuan/BTT_2254.webp',
  '/assets/images/hoai-tuan/BTT_2260.webp',
  '/assets/images/hoai-tuan/BTT_2269.webp',
  '/assets/images/hoai-tuan/BTT_2276.webp',
  '/assets/images/hoai-tuan/BTT_2285.webp',
  '/assets/images/hoai-tuan/BTT_2286.webp',
  '/assets/images/hoai-tuan/BTT_2290.webp',
  '/assets/images/hoai-tuan/BTT_2316.webp',
  '/assets/images/hoai-tuan/BTT_2328.webp',
  '/assets/images/hoai-tuan/BTT_2375.webp',
  '/assets/images/hoai-tuan/BTT_2405.webp',
]
</script>
<style lang="css" scoped>
.carousel {
  --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
  --vc-pgn-active-color: rgba(255, 255, 255, 1);
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
