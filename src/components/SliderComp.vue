<template>
    <div>
        <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :zoom="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/img/projectDet1.png" />
        <button class="swiper-zoom"></button>
      </div> </swiper-slide>
      <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/img/projectDet2.png" />
        <button class="swiper-zoom"></button>
      </div> </swiper-slide>
      <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/img/projectDet3.png" />
        <button class="swiper-zoom"></button>
      </div> </swiper-slide>
  </swiper>
    </div>
</template>

<script>
        import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};

</script>

<style lang="scss" scoped>

</style>