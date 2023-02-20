import { Breadcrumb, Col, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../../app.scss';
import { Routes } from '../../models/enums/routes.enum';
import './kit.scss';

export default function Kit() {
  const navigate = useNavigate();

  const displayTile = (text, img, path) => (
    <Col lg={8} md={12} xs={24}>
      <div className="box" onClick={() => navigate(path)}>
        <div className={`background-img ${img} flex-center`}>
          <div className="background-layer flex-center">
            <Typography.Text className="topic-title">{text}</Typography.Text>
          </div>
        </div>
      </div>
    </Col>
  );

  return (
    <div className="max-viewport-width margin-page">
      <Typography.Title level={2}>La trousse</Typography.Title>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Accueil</Breadcrumb.Item>
        <Breadcrumb.Item>Trousse</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-container">
        <Typography.Title
          level={3}
          style={{ marginTop: 0, marginBottom: '2rem' }}>
          Quelle section voulez-vous consulter?
        </Typography.Title>
        <Row gutter={[20, 16]}>
          {displayTile(
            "En savoir plus sur l'épilepsie",
            'topic-1',
            Routes.AboutEpilepsy
          )}
          {displayTile(
            "Que faire si je suis témoin d'une crise?",
            'topic-2',
            Routes.BeWitness
          )}
          {displayTile(
            'Les traitements de l’épilepsie?',
            'topic-3',
            Routes.Treatments
          )}
          {displayTile(
            'Quels sont les impacts de l’épilepsie',
            'topic-4',
            Routes.Impacts
          )}
          {displayTile('Mythes et réalités', 'topic-5', Routes.MythsAndFacts)}
          {displayTile('Outils divers', 'topic-6', Routes.Tools)}
        </Row>
      </div>
    </div>
  );
}
