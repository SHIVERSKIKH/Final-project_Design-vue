import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/style/scss/style.scss';
import router from './router';
import store from './store';

import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const app = createApp(App);
app.use(router);
app.use(store);

app.mount('#app');
