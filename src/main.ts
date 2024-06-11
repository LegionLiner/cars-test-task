import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import { storeCars } from './stores/carsStore';

createApp(App).use(createPinia()).mount('#app');

const carsStore = storeCars();
carsStore.getCars();
