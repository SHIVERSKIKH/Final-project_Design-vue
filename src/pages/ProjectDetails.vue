<template>
    <div>
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
import FooterComp from '../components/FooterComp.vue';
import SliderComp from '../components/SliderComp.vue';
    export default {
        components:{FooterComp, SliderComp},
        computed:{
            ...mapState(['data'])
        }
    }
</script>

<style lang="scss" scoped>

</style>