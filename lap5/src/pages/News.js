import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { newLists } from '../data/newsData';

const News = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-danger mb-4">News Category</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {newLists.map((news) => (
          <Col key={news.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={news.images} alt={news.title} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>{news.title}</Card.Title>
                <Card.Text className="text-muted flex-grow-1" style={{ fontSize: '14px' }}>
                  {news.description}
                </Card.Text>
                <a href={`#news-${news.id}`} className="mt-3 text-primary" style={{ fontSize: '14px' }}>
                  {news.title.substring(0, 40)}...
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;