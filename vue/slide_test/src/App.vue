<template>
  <!-- <section class="w-full">
    <swiper :rewind="true" :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide><img src="/img/skin1.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin2.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin3.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin4.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin5.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin6.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin7.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin8.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin9.jpg" alt=""></swiper-slide>
    </swiper>
    <div class="swiper-button-prev swiper-btn-prev"></div>
    <div class="swiper-button-next swiper-btn-next"></div>
  </section> -->
  <div class="swiper-container">
    <swiper
      :modules="modules"
      :slider-per-view="1"
      :space-between="10"
      navigation = "{
        prevEl: '.btn-slide-prev', nextEl: '.btn-slide-next'
      }"
      rewind="true"
      class="my-swiper"
    >
  
      <!-- <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img src="/img/skin1.jpg" alt="skin1 + (index + 1) " >
      </swiper-slide> -->
      <swiper-slide><img src="/img/skin1.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin2.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin3.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin4.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin5.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin6.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin7.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/img/skin8.jpg" alt=""></swiper-slide>
    </swiper>
    <button class="btn-slide-prev">previous</button>
    <button class="btn-slide-next">next</button>
  </div>
</template>
<script setup>
  // Import Swiper Vue.js components
  // import { Swiper, SwiperSlide } from 'swiper/vue';

  // // Import Swiper styles
  // import 'swiper/css';

  // import 'swiper/css/navigation';

  // import './style.css';

  // // import required modules
  // import { Navigation } from 'swiper/modules';
  // import { reactive } from 'vue';

  // const modules = reactive([Navigation]);
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import "swiper/swiper-bundle.css";
  import { Navigation } from 'swiper/modules';
import { reactive } from 'vue';
const modules = reactive([Navigation]);

// const slides = [
//   { image: "https://via.placeholder.com/300x200?text=Slide+1" },
//   { image: "https://via.placeholder.com/300x200?text=Slide+2" },
//   { image: "https://via.placeholder.com/300x200?text=Slide+3" },
// ];


</script>
<style>
  /* .w-full {
    width: 200px;
    margin: 50px;
  }

  .swiper-slide {
    width: 200px;
    height: 200px;
  }

  .swiper-button-prev {
    color: blueviolet;
  }

  .swiper-button-next {
    color: blueviolet;
  } */

   .my-swiper {
    /* 가로 비율 주기 */
    width: 100%;
    height: 300px;
   }

   .btn-slide-prev,
   .btn-slide-next {
    background: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
   }

   .btn-slide-prev {
    left: 10px;
   }

   .btn-slide-next {
    right: 10px;
   }
</style>

