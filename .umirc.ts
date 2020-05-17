import { defineConfig } from 'dumi';

export default defineConfig({
  title: '三好学生 R 某',
  mode: 'site',
  logo: 'http://qa7rwfdae.bkt.clouddn.com/2020-05-17-051805.png',
  // more config: https://d.umijs.org/config
  // algolia: {
  //   algolia: {
  //     apiKey: 'yourapikey',
  //     indexName: 'dumi',
  //   }
  // },
  navs: [
    {
      title: '每日一问',
      path: '/Question'
    },
    {
      title: '前端基础',
      path: '/FrontEndBase'
    },
    {
      title: 'React',
      path: '/React',
    },
    {
      title: '小程序',
      path: '/MiniProgram',
    },
    {
      title: 'TypeScript',
      path: '/TypeScript'
    },
    {
      title: 'Backend',
      path: '/Backend',
    },
    {
      title: '关于我',
      path: '/AboutMe'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/TtTRz'
    }
  ]
});
