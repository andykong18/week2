import React, { Component } from 'react'
import Article from './MissedArticle'
import missedArticles from './missed-articles'
import IconElement from './IconElement';


class MissedArticleList extends Component {
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
                    {this.state.missedArticles.map((article, idx) => {
                        return <div key={idx} className="col-md-4">
                            <Article imgsrc={article.image} title={article.title} description={article.description}
                                name={article.author.name} image={article.author.image} minutesToRead={article.minutesToRead}
                                postedDate={article.postedDate}  memberPreview={article.memberPreview}/>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default MissedArticleList;
