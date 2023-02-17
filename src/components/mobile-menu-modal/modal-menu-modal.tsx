import { MenuOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Typography } from 'antd';
import { useState } from 'react';

export default function MobileMenuModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        style={{ border: 'none', boxShadow: 'none' }}
        onClick={showModal}
        icon={<MenuOutlined />}></Button>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null} centered>
        <div
          style={{
            marginTop: '40px',
            marginBottom: '40px',
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Typography.Paragraph
            style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Que souhaitez-vous consulter?
          </Typography.Paragraph>
          <Space style={{ width: '80%' }} size="middle" direction="vertical">
            <Button block>{'Trousse'}</Button>
            <Button block>{"L'équipe"}</Button>
            <Button block>{'Ressource'}</Button>
          </Space>
        </div>
      </Modal>
    </>
  );
}
