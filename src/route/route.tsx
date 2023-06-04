import { CrownFilled, SmileFilled, TabletFilled } from '@ant-design/icons';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import type { RouteObject } from 'react-router';
import Layout from '@/views/Layout/Layout';

// access: "canAdmin",
const menus = [
  {
    path: 'welcome',
    name: '欢迎',
    element: <div style={{ height: '200vh' }}>欢迎</div>,
    icon: <SmileFilled />,
  },
  {
    path: 'admin',
    name: '管理页',
    icon: <CrownFilled />,
    routes: [
      {
        path: 'sub-page1',
        name: '一级页面',
        element: <div>一级页面</div>,
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      },
      {
        path: 'sub-page2',
        name: '二级页面',
        element: <div>二级页面</div>,
        icon: <CrownFilled />,
      },
      {
        path: 'sub-page3',
        name: '三级页面',
        element: <div>三级页面</div>,
        icon: <CrownFilled />,
      },
    ],
  },
  {
    name: '列表页',
    icon: <TabletFilled />,
    path: 'list',
    routes: [
      {
        path: 'sub-page',
        name: '列表页面',
        icon: <CrownFilled />,
        routes: [
          {
            path: 'sub-sub-page1',
            name: '一一级列表页面',
            element: <div>一一级列表页面</div>,
            icon: <CrownFilled />,
          },
          {
            path: 'sub-sub-page2',
            name: '一二级列表页面',
            element: <div>一二级列表页面</div>,
            icon: <CrownFilled />,
          },
          {
            path: 'sub-sub-page3',
            element: <div>一三级列表页面</div>,
            name: '一三级列表页面',
            icon: <CrownFilled />,
          },
        ],
      },
      {
        path: 'sub-page2',
        name: '二级列表页面',
        element: <div>二级列表页面</div>,
        icon: <CrownFilled />,
      },
      {
        path: 'sub-page3',
        name: '三级列表页面',
        element: <div>三级列表页面</div>,
        icon: <CrownFilled />,
      },
    ],
  },
];

const adminRoutes: RouteObject[] = [];

const formatterRoutes = (arr: Array<any>, path: string) => {
  arr.forEach((item) => {
    let curPath = path + item.path;
    if (item.routes) {
      curPath += '/';
      const arr = formatterRoutes(item.routes, curPath);
      item.children = arr;
    } else {
      adminRoutes.push({
        element: item.element,
        path: curPath,
      });
    }
  });
};

formatterRoutes(menus, '/m/');
console.log(adminRoutes);
const El = () => {
  const isLogin = true;
  return (
    <>
      {!isLogin && <Navigate to="/login" replace={true} />}
      {isLogin && <Navigate to="/m" replace={true} />}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <El />,
  },
  {
    path: 'login',
    element: <div>未登录</div>,
  },
  {
    path: 'm',
    element: <Layout />,
    children: adminRoutes,
  },
]);
export { menus, router };
