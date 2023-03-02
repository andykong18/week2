import React, { Component } from 'react'
import Article from './Article'
import missedArticles from './missed-articles'


class Articles extends Component {
    constructor() {
        super();
        this.state = {
            missedArticles: missedArticles,
        };
    }
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    {this.state.missedArticles.map((article, idx) => (
                        <div className="col-md-4" key={idx}>
                            <Article article={article} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default Articles;
