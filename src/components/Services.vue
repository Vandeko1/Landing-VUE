<template>
    <section>
        <div class="services">
            <div class="wrapper">
                <h2>Наши услуги</h2>
                <div class="services__items">
                    <swiper :breakpoints="{
                      '275': {
                        'slidesPerView': 1,
                        'spaceBetween': 20
                      },
                      '530': {
                        'slidesPerView': 2,
                        'spaceBetween': 20
                      },
                      '785': {
                        'slidesPerView': 3,
                        'spaceBetween': 20
                      },
                      '1040': {
                        'slidesPerView': 4,
                        'spaceBetween': 20
                      },
                      '1295': {
                        'slidesPerView': 5,
                        'spaceBetween': 20
                      }
                    }" virtual>
                        <swiper-slide v-for="(slide, index) in services" :key="slide.ID" :virtualIndex="index">
                            <div class="services__item">
                                <img class="services__item-img" :src="`./src/assets/img/${slide.ID}.jpg`" alt="`${slide.NAME}`">
                                <h3 class="services__item-header">{{slide.NAME}}</h3>
                            </div>

                        </swiper-slide>
                    </swiper>
                </div>
                <button>Связаться с нами<svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2931 1.70711C13.9026 1.31658 13.9026 0.683417 14.2931 0.292893C14.6837 -0.0976311 15.3168 -0.0976311 15.7074 0.292893L21.7073 6.29289C22.0979 6.68342 22.0979 7.31658 21.7073 7.70711L15.7074 13.7071C15.3168 14.0976 14.6837 14.0976 14.2931 13.7071C13.9026 13.3166 13.9026 12.6834 14.2931 12.2929L18.586 7.99998H1.01103C0.452653 7.99998 0 7.55227 0 6.99998C0 6.4477 0.452653 5.99998 1.01103 5.99998H18.586L14.2931 1.70711Z" fill="#18191F" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>
<script>
    import SwiperCore, { Virtual } from 'swiper';
    import {
        Swiper,
        SwiperSlide
    } from 'swiper/vue';
    SwiperCore.use([Virtual]);
    export default {
        data() {
            return {
                services: null
            }
        },
        components: {
            Swiper,
            SwiperSlide
        },
        methods: {
            onSwiper(swiper) {
                console.log(swiper);
            },
            onSlideChange() {
                console.log('slide change');
            }
        },
        mounted() {
            this.axios
                .get('https://b24crm-nst.s11.itua.in.ua/rest/513/tz8j9hozz843f81k/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=152&ELEMENT_ORDER[ID]=ASC')
                .then(response => (this.services = response.data.result))
        }
    }
</script>