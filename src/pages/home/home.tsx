import { Button, Col, Divider, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import '../../app.scss';
import HomePictures from '../../components/home-pictures/home-pictures';
import './home.scss';

export default function Home() {
  return (
    <>
      <HomePictures />
      <Space
        className="full-width"
        align="center"
        direction="vertical"
        size="middle">
        <Typography.Title className="home-title">
          Bienvenue sur Epitrousse
        </Typography.Title>
        <Typography.Text className="home-description">
          {
            "Vous trouverez sur ce site, une trousse complète d'information sur l'épilepsie. Que vous soyez atteint d'épilepsie, que vous connaissez quelqu'un qui en soit atteint, ou que vous ayez tout simplement des questions par rapport à cette maladie, cette trousse vous permettra d'en apprendre davantage."
          }
        </Typography.Text>
        <Button size="large" type="primary" style={{ marginBottom: '40px' }}>
          <Link to="/trousse">Accéder à la trousse</Link>
        </Button>
      </Space>
      <Divider
        style={{
          minWidth: '80%',
          width: '80%',
          margin: '0 auto 0 auto'
        }}></Divider>
      <div className="max-viewport-width messages-container">
        <Row>
          <Col xs={24} sm={11} className="flex-center home-cols">
            <Typography.Text>
              {
                "Notre mission est d'aider les gens en leur fournissant un site rempli d'informations utiles sur la maladie d'épilepsie. Nous sommes une équipe de futur médecins passionés, qui souhaite éduquer la population sur les questions fréquentes qu'ils peuvent se poser."
              }
            </Typography.Text>
          </Col>
          <Col span={2} className="home-grid-divider flex-center">
            <Divider type="vertical" style={{ height: '100%' }} />
          </Col>
          <Col
            xs={24}
            sm={11}
            className="flex-center home-cols"
            style={{ flexDirection: 'column' }}>
            <Typography.Text strong italic>
              {
                "« Je suis vraiment fière de participer à l'élaboration d'un site qui rescence des renseignements pertinents pour les personnes souffrants d'épilepsie ou pour leur entourage. »"
              }
            </Typography.Text>
            <Typography.Text style={{ marginTop: '10px' }}>
              {' - Marjolaine Deschênes'}
            </Typography.Text>
          </Col>
        </Row>
      </div>
    </>
  );
}
