import { Carousel, Col, Image, Row } from 'antd';
import home1 from '../../assets/img/home-1.jpg';
import home2 from '../../assets/img/home-2.jpg';
import home3 from '../../assets/img/home-3.jpg';
import useWindowDimensions from '../../hooks/use-window-dimensions.hook';

export default function HomePictures() {
  const { width } = useWindowDimensions();

  const displayImages = () =>
    width < 992 ? displayCarousel() : displaySideBySideImages();

  const displayImage = (img) => (
    <Image preview={false} src={img} height="100%"></Image>
  );

  const displayCarousel = () => (
    <Carousel autoplay={true}>
      {displayImage(home1)}
      {displayImage(home2)}
      {displayImage(home3)}
    </Carousel>
  );

  const displaySideBySideImages = () => (
    <Row gutter={8} style={{ width: '100%', margin: '0' }}>
      <Col span={8} style={{ paddingLeft: '0' }}>
        {displayImage(home1)}
      </Col>
      <Col span={8}>{displayImage(home2)}</Col>
      <Col span={8} style={{ paddingRight: '0' }}>
        {displayImage(home3)}
      </Col>
    </Row>
  );

  return <>{displayImages()}</>;
}
