import './assets/main.css';
import './assets/user.css';

import { createApp } from 'vue';
import App from './App.vue';
import UserInterface from './UserInterface.vue';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import '@fortawesome/fontawesome-free/css/all.css';

import { createRouter, createWebHistory } from 'vue-router';



const routes = [
  { path: '/', component: Login },
  { path: '/userinterface', component: UserInterface }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;




createApp(App).mount('#app')
createApp(UserInterface).mount('#userinterface')
