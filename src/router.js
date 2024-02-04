import { createRouter, createWebHistory } from 'vue-router';
import Main from './components/MainComp.vue';
import Blog from './components/BlogComp.vue';
import BlogDetails from './components/BlogDetailsComp.vue';
import Project from './components/Project.vue';

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
  {
    path: '/project',
    component: Project
  },
 
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;