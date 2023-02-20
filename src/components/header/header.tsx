import { BranchesOutlined } from '@ant-design/icons';
import { Layout, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../hooks/use-window-dimensions.hook';
import { Routes } from '../../models/enums/routes.enum';
import HeaderDesktopMenu from '../header-desktop-menu/header-desktop-menu';
import HeaderMobileMenu from '../header-mobile-menu/header-mobile-menu';
import './header.scss';

export default function Header() {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(Routes.Home);
  };

  const displayMenu = () =>
    width < 576 ? <HeaderMobileMenu /> : <HeaderDesktopMenu />;

  return (
    <Layout.Header className="header padding-page">
      <div className="header-content max-viewport-width">
        <Space onClick={navigateToHome} align="center" className="pointer">
          <BranchesOutlined className="header-logo" />
          <Typography.Title className="header-app-name">
            Epitrousse
          </Typography.Title>
        </Space>
        {displayMenu()}
      </div>
    </Layout.Header>
  );
}
