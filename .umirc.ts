import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: 'layout/index',
    routes: [
      {path: '/', component: '@/pages/registration/GatherData/index'},
      {path: '/register/', component: '@/pages/registration/GatherData/index'},
      {path: '/register/result', component: '@/pages/registration/result'}
    ]},
  ],
  exportStatic: {
    dynamicRoot:true,
    htmlSuffix:true
  }
});
