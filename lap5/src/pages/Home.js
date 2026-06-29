import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  // Danh sách các hình tròn menu bên dưới slider
  const menuImages = [
    'images/menu-01.jpg',
    'images/menu-02.jpg',
    'images/menu-03.jpg',
    'images/menu-04.jpg',
    'images/menu-05.jpg',
    'images/menu-06.jpg'
  ];

  return (
    <Container fluid className="px-0">
      {/* Slider Carousel sử dụng đúng các file slide trong zip */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="images/slide1.jpg" alt="First slide" style={{ maxHeight: '450px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="images/slide2.jpg" alt="Second slide" style={{ maxHeight: '450px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="images/slide3.jpg" alt="Third slide" style={{ maxHeight: '450px', objectFit: 'cover' }} />
        </Carousel.Item>
      </Carousel>

      {/* Vùng hiển thị các hình tròn Menu tròn nhỏ bên dưới slider */}
      <Container className="mt-4 text-center">
        <Row className="justify-content-center mb-4">
          {menuImages.map((imgSrc, index) => (
            <Col xs={4} sm={2} key={index} className="d-flex justify-content-center">
              <div 
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid #7c151a',
                  boxShadow: '0px 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                <img src={imgSrc} alt={`Menu ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Col>
          ))}
        </Row>
        
        {/* Tiêu đề trang chủ chuẩn màu đỏ như yêu cầu */}
        <h1 className="text-start text-danger fw-bold mt-5" style={{ color: '#b92c42' }}>
          This is Home Page
        </h1>
      </Container>
    </Container>
  );
};

export default Home;