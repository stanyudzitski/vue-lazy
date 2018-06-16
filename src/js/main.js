import '../styles/main.scss';

import Vue from 'vue';
import App from './App';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router';
import {routes} from "./routes/routes";

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});