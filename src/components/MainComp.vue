<template>
    <HeaderComp />
    <section class="header__promo center">
            <div class="header__promo-wrp">
                    <h1 class="header__promo-title">Let Your Home Be&nbsp;Unique</h1>
                    <p class="header__promo-txt">There are many variations of&nbsp;the passages of&nbsp;lorem Ipsum fromavailable, majority.</p>
                    <button class="header__btn">Get Started<span class="header__elem"></span></button>
                </div>
            </section>
    <main class="main">
        <section class="product">
            <div class="center">
                <div class="product__info">
                    <h2 class="product__title">Follow Our Projects</h2>
                    <p class="product__txt">It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will be&nbsp;distracted by&nbsp;the of&nbsp;readable content of&nbsp;page lookings at&nbsp;its layouts points.</p>
                </div>
                <div class="product__wrapper">
                    <ul class="product__list">
                        <li class="product__item">
                            <div class="product__images">
                                <img src="@/assets/img/product1.jpg" alt="images">
                            </div>
                            <div class="product__item-info">
                                <div>
                                    <h3 class="product__item-info_title">Modern Kitchan</h3>
                                    <p class="product__item-info_txt">Decor&nbsp;/ Artchitecture</p>
                                </div>
                                <div class="product__item-info_btn">
                                    <a class="product__item-info_link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg></a>
                                </div>
                            </div>
                        </li>
                        <li class="product__item">
                            <div class="product__images">
                                <img src="@/assets/img/product2.jpg" alt="images">
                            </div>
                            <div class="product__item-info">
                                <div>
                                    <h3 class="product__item-info_title">Modern Kitchan</h3>
                                    <p class="product__item-info_txt">Decor&nbsp;/ Artchitecture</p>
                                </div>
                                <div class="product__item-info_btn">
                                    <a class="product__item-info_link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg></a>
                                </div>
                            </div>
                        </li>
                        <li class="product__item">
                            <div class="product__images">
                                <img src="@/assets/img/product3.jpg" alt="images">
                            </div>
                            <div class="product__item-info">
                                <div>
                                    <h3 class="product__item-info_title">Modern Kitchan</h3>
                                    <p class="product__item-info_txt">Decor&nbsp;/ Artchitecture</p>
                                </div>
                                <div class="product__item-info_btn">
                                    <a class="product__item-info_link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg></a>
                                </div>
                            </div>
                        </li>
                        <li class="product__item">
                            <div class="product__images">
                                <img src="@/assets/img/product4.jpg" alt="images">
                            </div>
                            <div class="product__item-info">
                                <div>
                                    <h3 class="product__item-info_title">Modern Kitchan</h3>
                                    <p class="product__item-info_txt">Decor&nbsp;/ Artchitecture</p>
                                </div>
                                <div class="product__item-info_btn">
                                    <a class="product__item-info_link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="advantages">
            <div class="center">
                <div class="advantages__wrp">
                    <ul class="advantages__list">
                        <li class="advantages__item">
                            <span>12</span>
                            <p class="advantages__txt">Years Of Experiance</p>
                        </li>
                        <li class="advantages__item">
                           <span>85</span>
                            <p class="advantages__txt">Success Project</p>
                        </li>
                        <li class="advantages__item">
                           <span>15</span>
                            <p class="advantages__txt">Active Project</p>
                        </li>
                        <li class="advantages__item">
                           <span>95</span>
                            <p class="advantages__txt">Happy CUstomers</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="news">
            <div class="center">
                <div class="news__description">
                    <h2 class="news__title">Articles &amp;&nbsp;News</h2>
                    <p class="news__txt">It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will be&nbsp;distracted by&nbsp;the of&nbsp;readable content of&nbsp;a&nbsp;page when lookings at&nbsp;its layouts the points of&nbsp;using.</p>
                </div>
                <div class="news__info">
                    <div id="app" class="news__wrp">
                        <article v-for="item in articles.slice(0,3)" :key="item.id" class="news__info-item">
                            <div>
                                <div class="news__info-content">
                                    <div class="news__info-img_wrp">
                                        <img :src="item.url" alt="images" class="news__info-images">
                                    </div>
                                </div>
                                <div class="news__info-wrapper">
                                    <h3 class="news__info-title" v-html="item.description"></h3>
                                    <div class="news__info-container">
                                        <p class="news__info-txt">{{ item.data}}</p>
                                        <a v-html="item.link" href="blog_details.html" class="news__info-btn">
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </main>
<FooterComp />
</template>

<script>
import FooterComp from './FooterComp.vue';
import HeaderComp from './HeaderComp.vue'
export default {
    components:{HeaderComp, FooterComp},
    data: () => ({
  articles: [
    {
    description:"Let’s Get Solution For Building Construction Work",
    data: "26 December,2022",
    link:`<svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53   53" fill="none">
          <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC"/>
          <path d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
    url: require('@/assets/img/news1.png')
  },
    {
    description:`Low Cost Latest Invented Interior Designing <br> Ideas.`,
    data: "22 December,2022",
    link:`<svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53   53" fill="none">
          <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC"/>
          <path d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
    url: require('@/assets/img/news2.png'),
  },
    {
    description:"Best For Any Office & Business Interior Solution",
    data: "25 December,2022",
    link:`<svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53   53" fill="none">
          <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC"/>
          <path d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
    url: require('@/assets/img/news3.png'),
  },
    {
    description:"Let’s Get Solution For Building Construction Work",
    data: "26 December,2022",
    link:`<svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53   53" fill="none">
              <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC"/>
              <path d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    url: require('@/assets/img/news4.png'),
  },
    {
    description:`Low Cost Latest Invented Interior Designing <br> Ideas.`,
    data: "22 December,2022",
    link:`<svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53   53" fill="none">
              <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC"/>
              <path d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    url: require('@/assets/img/news5.png'),
  },
    {
    description:"Best For Any Office Business Interior Solution",
    data: "25 December,2022",
    link:`<svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53   53" fill="none">
              <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC"/>
              <path d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    url: require('@/assets/img/news6.png'),
  },
],
}),
methods: {
}
}
</script>


<style lang="scss" scoped>

</style>