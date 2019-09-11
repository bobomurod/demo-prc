import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Examples from './views/Examples.vue';
import Buttons from './views/Buttons.vue';
import Team from './views/Team.vue';
import Breakpoints from './views/Breakpoints.vue';
import Grids1 from './views/Grids1.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/examples',
      name: 'examples',
      component: Examples,
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: Buttons,
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
    },
    {
      path: '/breakpoints',
      name: 'breakpoints',
      component: Breakpoints,
    },
    {
      path: '/grids1',
      name: 'grids1',
      component: Grids1,
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Projects.vue'),
    },
  ],
});
