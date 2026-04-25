import { createApp } from 'vue';
import App from './App.vue';
import '../css/guest.css';
import { guest } from '../js/app/guest/guest.js';

const app = createApp(App);
app.mount('#app');

window.undangan = guest.init();
