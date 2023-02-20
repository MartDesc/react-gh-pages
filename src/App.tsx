import { ConfigProvider, Layout } from 'antd';
import { RouterProvider } from 'react-router-dom';
import './app.scss';
import { router } from './router';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff7a45',
          fontSize: 16
        }
      }}>
      <Layout>
        <RouterProvider router={router} />
        <Layout.Footer></Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
}
