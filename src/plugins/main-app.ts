import { createApp } from 'vue';
import App from '../App.vue';
import router from '../router';
import '../assets/tailwind.css';

export const app = createApp(App).use(router);
