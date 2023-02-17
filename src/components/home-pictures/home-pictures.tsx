import { Carousel, Col, Image, Layout, Row } from 'antd';
import home1 from '../../assets/img/home-1.jpg';
import home2 from '../../assets/img/home-2.jpg';
import home3 from '../../assets/img/home-3.jpg';
import useWindowDimensions from '../../hooks/use-window-dimensions.hook';

export default function HomePictures() {
  const { width } = useWindowDimensions();

  const displayImages = () =>
    width < 992 ? displayCarousel() : displaySideBySideImages();

  const displayCarousel = () => (
    <Carousel autoplay={true}>
      <Image preview={false} src={home1} height="100%"></Image>
      <Image preview={false} src={home2} height="100%"></Image>
      <Image preview={false} src={home3} height="100%"></Image>
    </Carousel>
  );

  const displaySideBySideImages = () => (
    <Row gutter={8} style={{ width: '100%', margin: '0' }}>
      <Col span={8} style={{ paddingLeft: '0' }}>
        <Image preview={false} src={home1} height="100%"></Image>
      </Col>
      <Col span={8}>
        <Image preview={false} src={home2} height="100%"></Image>
      </Col>
      <Col span={8} style={{ paddingRight: '0' }}>
        <Image preview={false} src={home3} height="100%"></Image>
      </Col>
    </Row>
  );

  return (
    <Layout style={{ backgroundColor: 'transparent' }}>
      {displayImages()}
    </Layout>
  );
}
