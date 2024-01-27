<template>
    <div>
        <header class="header">
        <div class="center">
            <div class="header__top">
                <div class="logo"><a class="logo-link" href="#"></a></div>
                <div class="header__menu">
                    <ul class="header__menu-list">
                        <li class="header__menu-item">
                            <router-link to="/" class="header__menu-link">Home</router-link>
                        </li>
                        <li class="header__menu-item">
                            <a href="#" class="header__menu-link">Project</a>
                        </li>
                        <li class="header__menu-item">
                            <router-link to="/blog" class="header__menu-link">Blog</router-link>
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
        
    }
</script>

<style lang="scss" scoped>

</style>