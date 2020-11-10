export default [
  {
    path: '/',
    // exact: false,
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/life' },
      { path: '/life', component: '@/pages/Life/index' },
      { path: '/koubei', component: '@/pages/Koubei/index' },
      {
        path: '/friend',
        component: '@/pages/Friend/indexfriend',
      },
      { path: '/my', component: '@/pages/My/index' },
      { path: '/login', component: '@/pages/HomeDetails' },
    ],
  },
];
