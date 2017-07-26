
import Vue from 'vue';
import App from './App';
import router from './router';


Vue.config.productionTip = false;

const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

export default { app };
