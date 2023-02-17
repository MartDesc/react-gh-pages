import { BranchesOutlined } from '@ant-design/icons';
import { Layout, Menu, Space, Typography } from 'antd';
import useWindowDimensions from '../../hooks/use-window-dimensions.hook';
import MobileMenuModal from '../mobile-menu-modal/modal-menu-modal';
import './header.scss';

export default function Header() {
  const { width } = useWindowDimensions();

  const displayDesktopMenu = () => {
    const items = [
      {
        label: 'Trousse',
        key: '1'
      },
      {
        label: 'À propos',
        key: '2'
      },
      {
        label: 'Ressource',
        key: '3'
      }
    ];

    return (
      <Menu style={{ fontSize: '14px' }} mode="horizontal" items={items} />
    );
  };

  const displayMobileMenu = () => <MobileMenuModal />;

  const displayMenu = () =>
    width < 576 ? displayMobileMenu() : displayDesktopMenu();

  return (
    <Layout.Header className="header">
      <div className="header-content max-viewport-width">
        <Space align="center">
          <BranchesOutlined
            style={{
              fontSize: '30px',
              verticalAlign: 'middle',
              color: '#ff7a45'
            }}
          />
          <Typography.Title style={{ fontSize: '18px', margin: '0' }}>
            Epitrousse
          </Typography.Title>
        </Space>
        <div>{displayMenu()}</div>
      </div>
    </Layout.Header>
  );
}
