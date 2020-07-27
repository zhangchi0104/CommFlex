import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   {path: "/", component: '@/layouts/index', exact: true,
  //     routes: [
  //       {path: '/', component: 'index'},
  //       {path:"/register", component: '@/pages/register/index', exact:true}
  //     ]
  //   }
  // ],
  exportStatic: {
    dynamicRoot:true,
  }
});
