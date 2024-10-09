import './bootstrap';

import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './layouts/App.vue'
import Home from './pages/Home.vue'
import ProductIndex from './pages/sorular/Index.vue'
import ProductCreate from './pages/sorular/Create.vue'
import ProductEdit from './pages/sorular/Edit.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/sorular', component: ProductIndex},
    {path: '/sorular/ekle', component: ProductCreate},
    {path: '/sorular/:id', component: ProductEdit},
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
