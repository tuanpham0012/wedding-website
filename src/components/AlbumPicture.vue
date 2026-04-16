<template>
  <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
    <Slide v-for="(img, index) in images" :key="index" >
      <img
          :src="img"
          loading="lazy"
          class="d-block img-fluid cursor-pointer"
          sizes="(max-width: 400px) 100vw, 400px"
          onclick="undangan.guest.modal(this)"
        />
    </Slide>
  </Carousel>

  <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
    <Slide v-for="(img, index) in thumbs" :key="index">
      <template #default="{ currentIndex, isActive }">
        <div
          :class="['thumbnail', { 'is-active': isActive }]"
          @click="slideTo(currentIndex)"
        >
          <img :src="img" alt="Thumbnail Image" class="thumbnail-image" loading="lazy" />
        </div>
      </template>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue'

const currentSlide = ref(0)

const slideTo = (nextSlide) =>{
    currentSlide.value = nextSlide
    console.log(nextSlide);
    
} 

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: 'fade',
  mouseDrag: false,
  touchDrag: false,
  height: 320,
  autoplay: 4000,
  slideEffect: 'fade',
  transition: 2500,
  height: 'auto'
}

const thumbnailsConfig = {
  height: 80,
  itemsToShow: 6,
  wrapAround: true,
  touchDrag: false,
  gap: 10,
}

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

const thumbs = [
  '/assets/images/thumbnails/BTT_1911.webp',
  '/assets/images/thumbnails/BTT_1932.webp',
  '/assets/images/thumbnails/BTT_1952.webp',
  '/assets/images/thumbnails/BTT_2027.webp',
  '/assets/images/thumbnails/BTT_2044.webp',
  '/assets/images/thumbnails/BTT_2052.webp',
  '/assets/images/thumbnails/BTT_2095.webp',
  '/assets/images/thumbnails/BTT_2137.webp',
  '/assets/images/thumbnails/BTT_2185.webp',
  '/assets/images/thumbnails/BTT_2209.webp',
  '/assets/images/thumbnails/BTT_2213.webp',
  '/assets/images/thumbnails/BTT_2227.webp',
  '/assets/images/thumbnails/BTT_2232.webp',
  '/assets/images/thumbnails/BTT_2237.webp',
  '/assets/images/thumbnails/BTT_2254.webp',
  '/assets/images/thumbnails/BTT_2260.webp',
  '/assets/images/thumbnails/BTT_2269.webp',
  '/assets/images/thumbnails/BTT_2276.webp',
  '/assets/images/thumbnails/BTT_2285.webp',
  '/assets/images/thumbnails/BTT_2286.webp',
  '/assets/images/thumbnails/BTT_2290.webp',
  '/assets/images/thumbnails/BTT_2316.webp',
  '/assets/images/thumbnails/BTT_2328.webp',
  '/assets/images/thumbnails/BTT_2375.webp',
  '/assets/images/thumbnails/BTT_2405.webp',
]

</script>
<style lang="css" scoped>

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-image {
  border-radius: 16px;
}

#thumbnails {
  margin-top: 10px;
}

.thumbnail {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}
</style>
