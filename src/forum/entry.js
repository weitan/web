import Vue from 'vue';
import ElementUI from 'element-ui';
import './assets/element-custom/index.css';

import router from './router';
import store from './vuex/store';
import './assets/css/index.scss';

if (!window.ELEMENT) Vue.use(ElementUI);

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h('router-view'),
});

