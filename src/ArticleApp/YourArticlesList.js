import React, { Component } from 'react'
import Article from './YourArticle'
import yourrticles from './your-articles'


class YourArticlesList extends Component {
    constructor() {
        super();
        this.state = {
            yourrticles: yourrticles,
        };
    }
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                        {this.state.yourrticles.map((article, idx) => {
                            return <div key={idx} className="col-md-6">
                                <Article imgsrc={article.image} title={article.title} description={article.description} 
                                name ={article.author.name} image = {article.author.image} minutesToRead = {article.minutesToRead}
                                postedDate = {article.postedDate} memberPreview={article.memberPreview} hasAudioAvailable={article.hasAudioAvailable}/>
                            </div>
                        })}
                </div>
            </div>
        );
    }
}

export default YourArticlesList;