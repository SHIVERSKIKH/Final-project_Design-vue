<template>
        <div class="project">
                <div class="project__info center">
                    <div class="project__info-wrp">
                        <h2 class="project__info-title">Our Project</h2>
                        <p class="project__info-txt">Home&nbsp;/ Blog</p>
                    </div>
                </div>
            </div>

            <main class="info">
                <div class="center">
                    <div class="info__tags">
                        <button class="info__tags-btn" :class="{ 'active_btn': currentTab === 'Bathroom' }" @click="changeTab('Bathroom')">Bathroom</button>
                        <button class="info__tags-btn" :class="{ 'active_btn': currentTab === 'BedRoom' }" @click="changeTab('BedRoom')">Bed Room</button>
                        <button class="info__tags-btn" :class="{ 'active_btn': currentTab === 'Kitchan' }" @click="changeTab('Kitchan')">Kitchan</button>
                        <button class="info__tags-btn" :class="{ 'active_btn': currentTab === 'LivingArea' }" @click="changeTab('LivingArea')">Living Area</button>
                    </div>
                    <div class="info__advantages-wrapper">
                            <article class="info__advantages-item" v-for="div in filteredDivs" :key="div.id">
                            <div class="info__advantages-images" @click="addFavorite(div)">
                                <img class="info__images" :src="div.image" alt="images">
                                <span v-if="div.snowStar" class="info__star"></span>    
                            </div>
                            <div class="info__advantages-wrp">
                                <div>
                                    <h3 class="info__advantages-wrp_title">{{ div.description }}</h3>
                                    <p class="info__advantages-wrp_txt">{{ div.title }}</p>
                                </div>
                                <div class="info__advantages-wrp_btn">
                                    <a v-html="div.link" class="info__advantages-wrp_link" href="/projectDetails"></a>
                                </div>
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
                        </article>
                    </div>
            </div>
            </main>
        <FooterComp />
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
    export default {
        components:{FooterComp},
        data: () => ({
            projects: [
               {
                id:'Bathroom',
                divs: [
                {
                    id:1,
                    description:'Minimal Bedroom',
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom1.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:2,
                    description:'Classic Minimal Bedroom',
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom2.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:3,
                    description:'Minimal Bedroom table',
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom3.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:4,
                    description:'Modern Medroom',
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom4.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:5,
                    description:'Minimal Bedroom',
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom5.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:6,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom6.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:7,
                    description:"System Table",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom7.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:8,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom8.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                ]
               },
               {
                id:'BedRoom',
                divs: [
                {
                    id:1,
                    description:"Minimal Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/project1.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:2,
                    description:"Classic Minimal Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/project3.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:3,
                    description:"Minimal Bedroom table",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/project5.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:4,
                    description:"Modern Medroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/project7.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:5,
                    description:"Minimal Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/project2.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:6,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/project4.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:7,
                    description:"System Table",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/project6.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:8,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/project8.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                ]
               },
               {
                id:'Kitchan',
                divs: [
                {
                    id:1,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan1.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:2,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan2.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:3,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan3.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:4,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan4.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:5,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan5.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:6,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan6.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:7,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan7.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                ]
               },
               {
                id:'LivingArea',
                divs: [
                {
                    id:1,
                    description:"Living Area",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea1.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:2,
                    description:"Living Area",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea2.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:3,
                    description:"Living Area",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea3.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:4,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea4.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:5,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea5.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                ]
               },
               
            ],
            changeBtns:['Bathroom', 'BedRoom', 'Kitchan', 'LivingArea'],
            currentTab: 'BedRoom',
            itemsPerPages:8
        }
    ),
    computed: {
  filteredDivs() {
    let result = this.projects.find(project => project.id === this.currentTab);
    return result ? result.divs : [];
  },
  totalPages() {
                return Math.ceil(this.projects.length / this.itemsPerPages)
            },
            paginatedProducts() {
                const pageNumber = this.getCurrentPageNumber();
                const startIndex = (pageNumber - 1) * this.itemsPerPages;
                const endIndex = startIndex + this.itemsPerPages;
                return this.projects.slice(startIndex, endIndex)
            }
},
    methods: {
        changeTab(tab) {
            this.currentTab = tab;
        },
        addFavorite(selectedDiv) {
      this.filteredDivs.forEach(div => {
        if (div === selectedDiv) {
          div.snowStar = !div.snowStar;
        }
      });
        },
        getCurrentPageNumber() {
                const pageNumberParam = parseInt(this.$route.params.pageNumber);
                return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
            },
            getPagesLink(pageNumber) {
                return `/project/${pageNumber}`
            }
    }
}
</script>

<style lang="scss" scoped>

</style>