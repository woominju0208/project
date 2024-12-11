<template>
    <div class="w-full">
      <swiper
        :rewind="true"
        :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
        :modules="modules"
        :loop="true"
        direction="horizontal"
        class="mySwiper"
      >
        <swiper-slide><img src="/img/skin1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="/img/skin2.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="/img/skin3.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="/img/skin4.jpg" alt=""></swiper-slide>
      </swiper>
      <!-- 외부 버튼 -->
      <div class="custom-prev">Prev</div>
      <div class="custom-next">Next</div>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Navigation } from 'swiper/modules';
  
  const modules = [Navigation];
  </script>
  
  <style>
  .custom-prev,
  .custom-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
  }
  
  .custom-prev {
    left: 10px;
  }
  
  .custom-next {
    right: 10px;
  }
  </style>
  