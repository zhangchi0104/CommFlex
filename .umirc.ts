import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  
  exportStatic: {
    dynamicRoot:true,
  }
});
