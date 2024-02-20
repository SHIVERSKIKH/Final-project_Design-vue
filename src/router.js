import { createRouter, createWebHistory } from 'vue-router';
import Main from './pages/MainComp.vue';
import Blog from './pages/BlogComp.vue';
import BlogDetails from './pages/BlogDetailsComp.vue';
import Project from './pages/Project.vue';
import ProjectDetails from './pages/ProjectDetails.vue';
import NotFound from './pages/NotFound.vue';

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
  {
    path: '/projectDetails',
    component: ProjectDetails
  },
  {
    path:'/:CatchAll(.*)',
    component: NotFound
  },
  {
    path:'/blog/:pageNumber?',
    component: Blog,
},
 
  {
    path:'/project/:pageNumber?',
    component: Project,
},
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, 
  scrollBehavior(to, from, savedPosition) {
    if(to.path === '/blog' || to.params.pageNumber){
      return{x:0, y:0};
    }else {
      return {left:0, top: 0 }; 
    }
    }
  }
);

export default router;