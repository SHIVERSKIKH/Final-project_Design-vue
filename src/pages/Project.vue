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
                            <article class="info__advantages-item" v-for="div in paginatedDivs" :key="div.id">
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
                        </article>
                    </div>
                    <div class="paginat">
                                <pagination
      :totalPages="3"
      :perPage="perPage"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
                </div>
            </div>
            </main>
            <FooterComp />
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import FooterComp from '@/components/FooterComp.vue';
    export default {
  components: { Pagination, FooterComp },
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
                {
                    id:9,
                    description:'Minimal Bedroom',
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom9.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:10,
                    description:'Classic Minimal Bedroom',
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom10.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:11,
                    description:'Minimal Bedroom table',
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom11.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:12,
                    description:'Modern Medroom',
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom12.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:13,
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
                    id:14,
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
                    id:15,
                    description:"System Table",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom1.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:16,
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
                    id:17,
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
                    id:18,
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
                    id:19,
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
                    id:20,
                    description:'Modern Medroom',
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bethroom4.jpg'),
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
                {
                    id:9,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/project1.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:10,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bedroom10.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:11,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bedroom11.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:12,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bedroom12.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:13,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bedroom13.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:14,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bedroom14.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:15,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bedroom15.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:16,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bedroom16.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:17,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bedroom17.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:18,
                    description:"Modern Bedroom",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/bedroom18.jpg'),
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
                {
                    id:8,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan8.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:9,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan9.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:10,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan10.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:11,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan11.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:12,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan12.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:13,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan13.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:14,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan14.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:15,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan15.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:16,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan16.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                                      snowStar: false,
                },
                {
                    id:17,
                    description:"Kithan",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/kitchan17.jpg'),
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
                {
                    id:6,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea6.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:7,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea7.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:8,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea8.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:9,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea9.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:10,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea10.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:11,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea11.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:12,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea12.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:13,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea13.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:14,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea14.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:15,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea15.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:16,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea16.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:17,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea17.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:18,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea18.jpg'),
                    link:`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>`,
                    snowStar: false,
                },
                {
                    id:19,
                    description:"LivingArea",
                    title:'Decor / Artchitecture',
                    image: require('@/assets/img/LivingArea19.jpg'),
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
            currentPage: 1,
            perPage:8
        }
    ),
    computed: {
  filteredDivs() {
    let result = this.projects.find(project => project.id === this.currentTab);
    return result ? result.divs : [];
  },
  paginatedDivs() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            return this.filteredDivs.slice(startIndex, startIndex + this.perPage);
        },
        totalPages() {
            return Math.ceil(this.filteredDivs.length / this.perPage);
        },
},
    methods: {
        changeTab(tab) {
            this.currentTab = tab;
            this.currentPage = 1;
        },
        addFavorite(selectedDiv) {
            this.filteredDivs.forEach(div => {
        if (div === selectedDiv) {
          div.snowStar = !div.snowStar;
        }
      });
        },
        onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    }
    }
}

</script>

<style lang="scss" scoped>

</style>