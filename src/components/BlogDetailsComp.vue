<template>
    <div>
        <HeaderComp />
        <div class="blog-details">
        </div>


    <main class="main">
    <div class="center">
    <div class="main__container">
        <article class="design" v-for="article in filteredArticles" :key="article.id">
                <h2 class="design__title">{{ article.title }}</h2>
                <div class="design__wrp">
                    <img class="design__img" :src="article.image" alt="images">
                </div>
                <div class="design__date">
                    <p class="design__date-txt">26&nbsp;December,2022</p>
                    <p class="design__date-txt">Interior&nbsp;/ Home&nbsp;/ Decore</p>
                </div>
                <div class="design__info">
                    <p class="design__txt">Lorem ipsum dolor sit amet, adipiscing Aliquam eu&nbsp;sem vitae turpmaximus.posuere in.Contrary to&nbsp;popular belief.There are many variations of&nbsp;passages of&nbsp;Lorem Ipsum available, but the majority have suffered alteration in&nbsp;some form, by&nbsp;injecthumour, or&nbsp;randomised words which don&rsquo;t look even slightly believable.</p>
                    <p class="design__txt">Embarrassing hidden in&nbsp;the middle of&nbsp;text. All the Lorem Ipsum generators on&nbsp;the Internet tend to&nbsp;repeat predefined chunks as&nbsp;necessary.</p>
                </div>
                <div class="design__details">
                    <div class="design__details-wrp">
                        <div class="design__details-img"></div>
                        <div>
                            <p class="design__details-txt">The details are not the details. They make the design.</p>
                        </div>
                    </div>
                </div>
                <div class="design__sprint">
                    <h2 class="design__sprint-title">Design sprints are great</h2>
                    <p class="design__sprint-txt">Lorem ipsum dolor sit amet, adipiscing Aliquam eu&nbsp;sem vitae turpmaximus.posuere in.Contrary to&nbsp;popular belief.There are many variations of&nbsp;passages of&nbsp;Lorem Ipsum available, but the majority have suffered.</p>
                    <ul class="design__sprint-list">
                        <li class="design__sprint-item">Contrary to&nbsp;popular belief.There are many variations of&nbsp;passages of&nbsp;Lorem Ipsum available, but the majority have suffered.</li>
                        <li class="design__sprint-item">Contrary to&nbsp;popular belief.There are many variations of&nbsp;passages of&nbsp;Lorem Ipsum available, but the majority have suffered.</li>
                        <li class="design__sprint-item">Contrary to&nbsp;popular belief.There are many variations of&nbsp;passages of&nbsp;Lorem Ipsum available, but the majority have suffered.</li>
                    </ul>
                    <div class="design__sprint-wrp">
                        <img class="design__sprint-img" :src="article.photo" alt="images">
                    </div>
                    <p class="design__sprint-txt">Lorem ipsum dolor sit amet, adipiscing Aliquam eu&nbsp;sem vitae turpmaximus.posuere in.Contrary to&nbsp;popular belief.There are many variations of&nbsp;passages of&nbsp;Lorem Ipsum available, but the majority have suffered.</p>
                </div>
            </article>
            <div class="tags">
                <h2 class="tags__title">Tags</h2>
                <div class="tags__btn">
                    <div class="tags__btn-wrp">
                        <button class="tags__button kitchen-btn" :class="{ 'active_tabs': currentTab === 'kitchen' }" @click="changeTab('kitchen')">Kitchen</button>
                        <button class="tags__button bedroom-btn" :class="{ 'active_tabs': currentTab === 'bedroom' }" @click="changeTab('bedroom')" >Bedroom</button>
                    </div>
                    <div class="tags__btn-wrp">
                        <button class="tags__button building-btn" :class="{ 'active_tabs': currentTab === 'building' }" @click="changeTab('building')">Building</button>
                        <button class="tags__button architecture-btn" :class="{ 'active_tabs': currentTab === 'architecture' }"  @click="changeTab('architecture')">Architecture</button>
                    </div>
                    <div class="tags__btn-wrp">
                        <button class="tags__button planning-btn" :class="{ 'active_tabs': currentTab === 'planning' }" @click="changeTab('planning')">Kitchen Planning</button>
                        <button class="tags__button bedroom-btn" :class="{ 'active_tabs': currentTab === 'bedroom' }" @click="changeTab('bedroom')">Bedroom</button>
                    </div>
                </div>
            </div>
            </div>
    </div>
</main>

<FooterComp />
    </div>
</template>

<script>
import HeaderComp from './HeaderComp.vue';
import FooterComp from './FooterComp.vue';
    export default {
        components:{HeaderComp, FooterComp},
        data: () => ({
            articles: [
                {
                    id:"kitchen",
                    title:'Let’s Get Solution for Building Construction Work',
                    image: require('@/assets/img/Image-article.png'),
                    photo:require('@/assets/img/Image-sprint.png'),
                },
                {
                    id:'bedroom',
                    title:'Let’s Get Solution for Building Construction Work',
                    image:require('@/assets/img/bedroom.jpg'),
                    photo:require('@/assets/img/bedroom2.jpg'),
                },
                {
                    id:'building',
                    title:'Let’s Get Solution for Building Construction Work',
                    image:require('@/assets/img/bedroom2.jpg'),
                    photo:require('@/assets/img/Building2.jpg'),
                },
                {
                    id:'architecture',
                    title:'Let’s Get Solution for Building Construction Work',
                    image:require('@/assets/img/Architecture.jpg'),
                    photo:require('@/assets/img/Architecture2.jpg'),
                },
                {
                    id:'planning',
                    title:'Let’s Get Solution for Building Construction Work',
                    image:require('@/assets/img/KitchenPlanning.jpg'),
                    photo:require('@/assets/img/KitchenPlanning2.jpg'),
                },
            ],
            changeBtns:['kitchen', 'bedroom', 'building', 'architecture', 'planning'],
            currentTab: 'kitchen'
        }
    ),
    computed:{
        filteredArticles() {
            return this.articles.filter(article => article.id.includes(this.currentTab));
          }
    },
    methods: {
        changeTab(tab) {
            this.currentTab = tab;
        }
        }
       
    }
</script>

<style lang="scss" scoped>

</style>