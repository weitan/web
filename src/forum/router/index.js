import Vue from 'vue';
import VueRouter from 'vue-router';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: require('@/pages/root').default,
    children: [
      {
        path: 'error',
        component: require('@/pages/error').default,
      },
    ],
  }
];

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'is-active',
  routes,
});

export default router;
