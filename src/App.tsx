import { RouterProvider } from 'react-router-dom';
import { router } from './route/route';
import { ProConfigProvider } from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import { Provider as StoreProvider, useSelector } from 'react-redux';
import { RootState, store } from './store';

function App() {
  return (
    <StoreProvider store={store}>
      <SubApp />
    </StoreProvider>
  );
}

const SubApp = () => {
  const colorPrimary = useSelector(
    (state: RootState) => state.them.colorPrimary
  );
  return (
    <ProConfigProvider prefixCls="lxl">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary,
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </ProConfigProvider>
  );
};

export default App;
