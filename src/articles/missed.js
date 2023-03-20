import React, { Component } from 'react';
import Article from './missedArticle';
import missedArticles from './missed-articles';
import { Container, Row, Col } from 'react-bootstrap';

class missed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missedArticles: missedArticles
    };
  }
  render() {
    return (
      <Container fluid className="d-flex justify-content-center">
        <Row>
          {this.state.missedArticles.map((article, idx) => {
            return (
              <Col key={idx} md={4}>
                <Article
                  imgsrc={article.image}
                  title={article.title}
                  description={article.description}
                  name={article.author.name}
                  image={article.author.image}
                  minutesToRead={article.minutesToRead}
                  postedDate={article.postedDate}
                  memberPreview={article.memberPreview}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default missed;
