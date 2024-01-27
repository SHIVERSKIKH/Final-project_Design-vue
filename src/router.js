import { createRouter, createWebHistory } from 'vue-router';
import Main from './components/MainComp.vue';
import Blog from './components/BlogComp.vue';
import BlogDetails from './components/BlogDetailsComp.vue';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/blogDetails',
    component: BlogDetails
  },
 
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;