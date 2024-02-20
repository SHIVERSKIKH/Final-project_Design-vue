Copy code
<template>
  <div>
    <header class="header">
      <div class="center">
        <div class="header__top">
          <div class="logo">
                <router-link class="logo-link" to="/"></router-link>
            </div>
          <div class="header__menu">
            <ul class="header__menu-list">
              <li v-for="(item, index) in menuItems" :key="index" class="header__menu-item">
                <router-link :to="item.path" :class="{ 'header__menu-link': true, 'active-menu': isActive(item.path) }">{{ item.label }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { path: '/', label: 'Home' },
        { path: '/project', label: 'Project' },
        { path: '/blog', label: 'Blog' }
      ]
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>