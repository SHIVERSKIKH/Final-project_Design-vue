<template>
            <div class="blog">
                <div class="blog__info center">
                    <div class="blog__info-wrp">
                        <h2 class="blog__info-title">Articles &amp;&nbsp;News</h2>
                        <p class="blog__info-txt">Home&nbsp;/ Blog</p>
                    </div>
                </div>
            </div>

    <main class="main">
        <div class="post">
            <div class="center">
                <h3 class="post__title">Latest Post</h3>
                <article class="post__article">
                    <div class="post__imges">
                        <img src="@/assets/img/post-img.png" alt="images">
                    </div>
                    <div class="post__info">
                        <h4 class="post__info-title">Low Cost Latest Invented Interior Designing Ideas</h4>
                        <p class="post__info-txt">Lorem ipsum dolor sit amet, adipiscing Aliquam eu&nbsp;sem vitae turpis dignissim maximus.posuere in.Contrary to&nbsp;popular belief.</p>
                        <p class="post__info-txt">Lorem Ipsum is&nbsp;not simply random text. It&nbsp;has roots in&nbsp;a&nbsp;piece of&nbsp;classica.</p>
                        <div class="post__info-btn">
                            <p class="post__info-text">26&nbsp;December,2022</p>
                            <router-link to="/blogDetails" class="post__info-link"></router-link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <section class="news">
            <div class="center">
                <h2 class="news__title title-blog">Articles &amp;&nbsp;News</h2>
                    <div id="app" class="news__wrp">
                        <article v-for="item in paginatedProducts" :key="item.id" class="news__info-item">
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
                                        <router-link  to="/blogDetails" class="news__info-btn"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53   53" fill="none">
                                        <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC"/>
                                        <path d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                            </router-link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                <div class="paginat">
                    <div class="paginat__list" v-if="totalPages > 1">
            <router-link class="btn-paginat" v-for="pageNumber in totalPages" :key="pageNumber" :to="getPagesLink(pageNumber)">{{ pageNumber }}</router-link>
            <button class="paginat__link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                            </button>
        </div>
                </div>
            </div>
        </section>
    </main>
    <FooterComp />
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
    export default {
        components:{FooterComp},
        data: () => ({
      articles: [
        {
        description:"Let’s Get Solution For Building Construction Work",
        data: "26 December,2022",
        url: require('@/assets/img/news1.png')
      },
        {
        description:`Low Cost Latest Invented Interior Designing <br> Ideas.`,
        data: "22 December,2022",
        url: require('@/assets/img/news2.png'),
      },
        {
        description:"Best For Any Office & Business Interior Solution",
        data: "25 December,2022",
        url: require('@/assets/img/news3.png'),
      },
        {
        description:"Let’s Get Solution For Building Construction Work",
        data: "26 December,2022",
        url: require('@/assets/img/news4.png'),
      },
        {
        description:`Low Cost Latest Invented Interior Designing <br> Ideas.`,
        data: "22 December,2022",
        url: require('@/assets/img/news5.png'),
      },
        {
        description:"Best For Any Office Business Interior Solution",
        data: "25 December,2022",
        url: require('@/assets/img/news6.png'),
      },
        {
        description:"Let’s Get Solution For Building Construction Work",
        data: "26 December,2022",
        url: require('@/assets/img/news1.png')
      },
        {
        description:`Low Cost Latest Invented Interior Designing <br> Ideas.`,
        data: "22 December,2022",
        url: require('@/assets/img/news2.png'),
      },
        {
        description:"Best For Any Office & Business Interior Solution",
        data: "25 December,2022",
        url: require('@/assets/img/news3.png'),
      },
        {
        description:"Let’s Get Solution For Building Construction Work",
        data: "26 December,2022",
        url: require('@/assets/img/news4.png'),
      },
        {
        description:`Low Cost Latest Invented Interior Designing <br> Ideas.`,
        data: "22 December,2022",
        url: require('@/assets/img/news4.png'),
      },
        {
        description:"Best For Any Office & Business Interior Solution",
        data: "25 December,2022",
        url: require('@/assets/img/news3.png'),
      },
        {
        description:"Let’s Get Solution For Building Construction Work",
        data: "26 December,2022",
        url: require('@/assets/img/news4.png'),
      },
        {
        description:`Low Cost Latest Invented Interior Designing <br> Ideas.`,
        data: "22 December,2022",
        url: require('@/assets/img/news4.png'),
      },
        {
        description:"Best For Any Office & Business Interior Solution",
        data: "25 December,2022",
        url: require('@/assets/img/news3.png'),
      },
        {
        description:"Let’s Get Solution For Building Construction Work",
        data: "26 December,2022",
        url: require('@/assets/img/news4.png'),
      },
    ],
    itemsPerPages:6
    }),
    computed:{
            totalPages() {
                return Math.ceil(this.articles.length / this.itemsPerPages)
            },
            paginatedProducts() {
                const pageNumber = this.getCurrentPageNumber();
                const startIndex = (pageNumber - 1) * this.itemsPerPages;
                const endIndex = startIndex + this.itemsPerPages;
                return this.articles.slice(startIndex, endIndex)
            }
        },
        methods: {
            getCurrentPageNumber() {
                const pageNumberParam = parseInt(this.$route.params.pageNumber);
                return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
            },
            getPagesLink(pageNumber) {
                return `/blog/${pageNumber}`
            }
    }
}

</script>

<style lang="scss" scoped>

</style>