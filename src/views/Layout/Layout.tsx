import { LogoutOutlined } from '@ant-design/icons';
import { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import type { HeaderProps } from '@ant-design/pro-components';
import { Dropdown } from 'antd';
import { useRef, useState } from 'react';
import MenuFooter from './MenuFooter';
import Actions from './Actions';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { menus } from '@/route/route';
import styles from './Layout.module.less';
import { LayoutAvatarProps } from '@/@types/layout';
const Layout = () => {
  const settings = useRef<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: false,
    navTheme: 'light', //realDark
    contentWidth: 'Fluid',
    siderMenuType: 'sub',
  }).current;
  const navigate = useNavigate();
  const location = useLocation();

  const [avatarProps] = useState<LayoutAvatarProps>({
    src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    size: 'small',
    title: '七妮妮',
    render: (props, dom) => {
      return (
        <Dropdown
          menu={{
            items: [
              {
                key: 'logout',
                icon: <LogoutOutlined />,
                label: '退出登录',
              },
            ],
          }}
        >
          {dom}
        </Dropdown>
      );
    },
  });

  const headerTitleRender = (
    logo: React.ReactNode,
    title: React.ReactNode,
    props: HeaderProps
  ) => {
    const defaultDom = (
      <a>
        {logo}
        {title}
      </a>
    );
    if (typeof window === 'undefined') return defaultDom;
    if (document.body.clientWidth < 1400) {
      return defaultDom;
    }
    if (props.isMobile) return defaultDom;
    return <>{defaultDom}</>;
  };

  const onMenuHeaderClick = () => {
    console.log('头部点击');
  };

  const onMenuItemClick = (item: any) => {
    item.path && navigate('/m' + item.path);
  };

  return (
    <ProLayout
      prefixCls="lxl"
      className={styles.pro_layout}
      //整体的背景图
      // bgLayoutImgList
      appList={[]}
      route={{
        children: menus,
      }}
      location={{
        pathname: location.pathname.split('/m')[1],
      }}
      token={{
        header: {
          colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
        },
      }}
      siderMenuType="group"
      menu={{
        collapsedShowGroupTitle: true,
      }}
      avatarProps={avatarProps}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        if (typeof window === 'undefined') return [];
        return [<Actions layout={props.layout} />];
      }}
      //头部左边 logo title
      headerTitleRender={headerTitleRender}
      menuFooterRender={(props) =>
        props?.collapsed ? undefined : <MenuFooter />
      }
      onMenuHeaderClick={onMenuHeaderClick}
      menuItemRender={(item) => (
        <div onClick={() => onMenuItemClick(item)}>{item.name}</div>
      )}
      {...settings}
    >
      <PageContainer
        token={{
          //页面的padding
          paddingInlinePageContainerContent: 0,
        }}
        title={false}
      >
        <Outlet />
        <Navigate to="welcome" />
      </PageContainer>
    </ProLayout>
  );
};

export default Layout;
