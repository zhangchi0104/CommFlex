import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/register', component: 'layout/index',
    routes: [
      {path: '/register/', component: '@/pages/registration/GatherData/index'},
      {path: '/register/result', component: '@/pages/registration/result'}
    ]},
  ],
});
