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

const images = Object.values(
  import.meta.glob("/assets/images/hoai-tuan/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    import: "default",
  }))

const thumbs = Object.values(
  import.meta.glob("/assets/images/thumbnails/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    import: "default",
  }))

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
