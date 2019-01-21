import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'
import axios from 'axios'

Vue.prototype.$http = axios;

import router from "./router";
import store from "./store";

require('./assets/css/main.css')

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueMoment);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
