<template>
    <div class="w-full">
        <swiper 
            :rewind="true"
            :navigation="{ nextEl:'.custom-next', prevEl:'.custom-prev'  }"
            :breakpoints= "breakpoints"
            :modules="modules"
            :loop="true"
            direction="horizontal"
            slidesPerView="1"
            spaceBetween="10"
            class="mySwiper">
            <!-- <div class="slide-container"> -->
                <swiper-slide><img src="/img/skin1.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/img/skin2.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/img/skin3.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/img/skin4.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/img/skin5.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/img/skin6.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/img/skin7.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/img/skin8.jpg" alt=""></swiper-slide>
            <!-- </div> -->
        </swiper>
        <div class="custom-prev">prev</div>
        <div class="custom-next">next</div>
    </div>

</template>
    
<script setup>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/navigation';

    // import required modules
    import { Navigation } from 'swiper/modules';
    // import { reactive } from 'vue';

    const modules = [Navigation];
    // const modules = reactive([Navigation]);

    const breakpoints = {

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    };

</script>
<style>
    /* @import url('../../css/common.css'); */
    .w-full {
    width: 90%;
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .swiper-slide {
    /* width: 200px; */
    height: 200px;
  }
  
/* .slide-container {
    display: flex;
    justify-content: center;
} */

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