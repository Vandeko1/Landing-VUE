<template>
    <section>
        <div class="wrapper">
            <div class="news">
                <h2>Новости</h2>
                <div class="news__main-item">
                    <img class="news__main-img" src="/src/assets/img/news-seo.jpg" alt="SEO в 2021 году: 8 актуальных трендов">
                    <div class="news__main-info">
                        <div class="news__item-info">
                            <a class="news__item-tag" href="">SEO</a>
                            <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.5" x2="15" y2="0.5" stroke="#DEDEDE" />
                            </svg>
                            <p class="news__item-time">5 мин чтения</p>
                        </div>
                        <h3 class="news__item-header"><a href="">SEO в 2021 году: 8 актуальных трендов</a></h3>
                        <p class="news__item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non suspendisse mauris neque, arcu posuere vel.

                            Tortor bibendum morbi ac posuere aliquet vitae. Vulputate et at consequat, augue non lectus congue congue ...</p>
                        <a href="" class="news__item-readmore">Читать дальше<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1953 4.47132C9.93491 4.21097 9.93491 3.78886 10.1953 3.52851C10.4556 3.26816 10.8777 3.26816 11.1381 3.52851L15.1381 7.52851C15.3984 7.78886 15.3984 8.21097 15.1381 8.47132L11.1381 12.4713C10.8777 12.7317 10.4556 12.7317 10.1953 12.4713C9.93491 12.211 9.93491 11.7889 10.1953 11.5285L13.0572 8.66657H1.34052C0.968273 8.66657 0.666504 8.3681 0.666504 7.99991C0.666504 7.63172 0.968273 7.33324 1.34052 7.33324H13.0572L10.1953 4.47132Z" fill="#8C30F5" />
                            </svg></a>
                    </div>
                </div>
                <div class="news__items">
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
                        <swiper-slide v-for="(slide, index) in news" :key="slide.ID" :virtualIndex="index">
                             <div class="news__item">
                                <img class="news__item-img" :src="`./src/assets/img/${slide.ID}.jpg`" alt="${slide.NAME}`">
                                <div class="news__item-info">
                                    <a class="news__item-tag" href="">SEO</a>
                                    <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="0.5" x2="15" y2="0.5" stroke="#DEDEDE"/>
                                    </svg>
                                    <p class="news__item-time">5 мин чтения</p>
                                </div>
                                <h3 class="news__item-header"><a href="">{{slide.NAME}}</a></h3>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import {
        Swiper,
        SwiperSlide
    } from 'swiper/vue';
    import 'swiper/swiper.scss';
    import "swiper/components/pagination/pagination.min.css"
    import SwiperCore, { Pagination } from 'swiper/core';
    SwiperCore.use([Pagination]);
    export default {
        data() {
            return {
                news: null
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
                .get('https://b24crm-nst.s11.itua.in.ua/rest/513/tz8j9hozz843f81k/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=153&ELEMENT_ORDER[ID]=DESC')
                .then(response => (this.news = response.data.result))
            //      .then(res => (console.log(res)));
        }
    }
</script>