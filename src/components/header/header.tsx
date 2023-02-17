import { RadarChartOutlined } from '@ant-design/icons';
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
        label: "L'équipe",
        key: '2'
      },
      {
        label: 'Ressource',
        key: '3'
      }
    ];

    return <Menu mode="horizontal" items={items} />;
  };

  const displayMobileMenu = () => <MobileMenuModal />;

  const displayMenu = () =>
    width < 576 ? displayMobileMenu() : displayDesktopMenu();

  return (
    <Layout.Header className="header">
      <div className="header-content">
        <Space align="center">
          <RadarChartOutlined
            style={{ fontSize: '36px', verticalAlign: 'middle' }}
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
