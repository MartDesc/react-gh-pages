import { ConfigProvider, Layout } from 'antd';
import './app.scss';
import Header from './components/header/header';
import Home from './pages/home/home';

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
        <Header />
        <Layout.Content style={{ backgroundColor: 'white' }}>
          <Home />
        </Layout.Content>
        <Layout.Footer></Layout.Footer>
      </Layout>{' '}
    </ConfigProvider>
  );
}
