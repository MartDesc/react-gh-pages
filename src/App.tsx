import { Layout } from 'antd';
import './app.scss';
import Header from './components/header/header';
import Home from './pages/home/home';

export default function App() {
  return (
    <>
      <Layout>
        <Header />
        <Layout.Content style={{ backgroundColor: 'white' }}>
          <Home />
        </Layout.Content>
        <Layout.Footer></Layout.Footer>
      </Layout>
    </>
  );
}
