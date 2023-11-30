import { lazy } from 'react';

import { RoutesConstant } from '@shared/constants';

import type { IRoutes } from 'router';

// components
const Home = lazy(() => import(/*webpackChunkName:'HomePage'*/ '@views/Home'));

export const routes: IRoutes = [
  {
    key: RoutesConstant.HOME,
    path: '/home',
    component: Home,
  },
];

export default routes;
