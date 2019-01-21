import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use( VueRouter );

import Home from "./components/Home";
import Details from "./views/Details";


const routes = [
    { path: '/', component: Home },
    { path: '/details/:id', component: Details }
  ];

export default new VueRouter({
    routes 
})