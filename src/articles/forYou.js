import React, { Component } from 'react';
import Article from './forYouArticle';
import yourArticles from './your-articles.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class forYou extends Component {
    constructor() {
        super();
        this.state = {
            yourArticles: yourArticles
        }
    }
    render() {
        return (
            <Row>
                <Col md={6}>
                    {this.state.yourArticles.slice(0, 2).map((article, idx) => {
                        return <div key={idx} style={{ marginBottom: '20px' }}>
                            <Article imgsrc={article.image} title={article.title} description={article.description}
                                name={article.author.name} image={article.author.image} minutesToRead={article.minutesToRead}
                                postedDate={article.postedDate} memberPreview={article.memberPreview} hasAudioAvailable={article.hasAudioAvailable} />
                        </div>
                    })}
                </Col>
                <Col md={6}>
                    {this.state.yourArticles.slice(2, 4).map((article, idx) => {
                        return <div key={idx} style={{ marginBottom: '20px' }}>
                            <Article imgsrc={article.image} title={article.title} description={article.description}
                                name={article.author.name} image={article.author.image} minutesToRead={article.minutesToRead}
                                postedDate={article.postedDate} memberPreview={article.memberPreview} hasAudioAvailable={article.hasAudioAvailable} />
                        </div>
                    })}
                </Col>
            </Row>
        );
    }
}

export default forYou;