<template lang="">
  <div
    class="sticky-top vh-100 d-none d-sm-block col-sm-5 col-md-6 col-lg-7 col-xl-8 col-xxl-9 overflow-y-hidden m-0 p-0 "
  >
    <div
      class="position-relative bg-white-black d-flex justify-content-center align-items-center vh-100"
    >
      <Carousel
        v-bind="config"
        class="position-absolute h-100 w-100 slide-desktop"
      >
        <Slide v-for="(img, index) in images" :key="index">
          <div class="carousel__item">
            <img
              :src="img"
              alt="bg"
              class="bg-cover-home object-fit-contain"
              style="
                mask-image: none;
                opacity: 35%;
              "
            />
          </div>
        </Slide>
      </Carousel>
      <div
        class="text-center p-5 bg-overlay-auto rounded-5"
        style="z-index: 10000"
      >
        <h2 class="font-esthetic mb-4" style="font-size: 2rem">
          Quốc Tuấn&nbsp;&nbsp; &amp; &nbsp;&nbsp;Thu Hoài
        </h2>
        <p class="m-0" style="font-size: 1rem">Chủ Nhật, 03 Thắng 05 năm 2026</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
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
const images = Object.values(
  import.meta.glob("/assets/images/hoai-tuan/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    import: "default",
  }),
);
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
