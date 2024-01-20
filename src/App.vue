<template>
<MainComp />
<BlogComp />
<BlogDetailsComp />
</template>

<script>

import MainComp from './components/MainComp.vue';
import BlogComp from './components/BlogComp.vue';
import BlogDetailsComp from './components/BlogDetailsComp.vue';
export default {
  name: 'App',
  components: {
    MainComp,
    BlogComp,
    BlogDetailsComp,
  }
}
</script>

<style lang="scss">

</style>
