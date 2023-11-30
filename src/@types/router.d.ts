import type { LazyExoticComponent } from 'react';

export interface IRouteMeta {
  authRequired?: boolean;
}

export type IRoute = {
  key: string;
  path: string;
  component: LazyExoticComponent<<T extends Meta>(props: T) => JSX.Element>;
  meta?: IRouteMeta;
};

export type IRoutes = IRoute[];
