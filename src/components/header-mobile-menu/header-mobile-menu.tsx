import { MenuOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Typography } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../models/enums/routes.enum';
import './header-mobile-menu.scss';

export default function HeaderMobileMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = (path) => {
    setIsModalOpen(false);
    navigate(path);
  };

  const displayNavigationButton = (text, path) => (
    <Button onClick={() => handleNavigate(path)} block>
      {text}
    </Button>
  );

  return (
    <>
      <Button
        className="mobile-menu-button"
        onClick={showModal}
        icon={<MenuOutlined />}></Button>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null} centered>
        <div className="mobile-menu-modal">
          <Typography.Paragraph style={{ fontWeight: 'bold' }}>
            Que souhaitez-vous consulter?
          </Typography.Paragraph>
          <Space style={{ width: '80%' }} size="middle" direction="vertical">
            {displayNavigationButton('Trousse', Routes.Kit)}
            {displayNavigationButton('À propos', Routes.About)}
            {displayNavigationButton('Ressources', Routes.Resources)}
          </Space>
        </div>
      </Modal>
    </>
  );
}
