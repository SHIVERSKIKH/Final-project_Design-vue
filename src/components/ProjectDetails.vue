<template>
    <div>
        <HeaderComp />
        <div class="projectDetails">
            </div>
            <main class="projectDetails__main">
                <div class="center">
                    <div class="projectDetails__info">
                        <h2 class="projectDetails__info-title">{{ data.name }}</h2>
                        <p class="projectDetails__info-txt">{{ data.description }}</p>
                        <p class="projectDetails__info-txt">{{ data.info }}</p>
                    </div>
                <div class="projectDetails-slider">
                    <SliderComp />
                </div>
            </div>
            </main>
        <FooterComp />

    </div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderComp from './HeaderComp.vue';
import FooterComp from './FooterComp.vue';
import SliderComp from './SliderComp.vue';
    export default {
        components:{HeaderComp, FooterComp, SliderComp},
        computed:{
            ...mapState(['data'])
        }
    }
</script>

<style lang="scss" scoped>

</style>