import React, { Component } from 'react';
import Article from './forYouArticle';
import yourArticles from './your-articles.json';

class forYou extends Component {
    constructor() {
        super();
        this.state = { 
            yourArticles: yourArticles
         }
    }
    render() { 
        return ( 
            <div>
                <Article />
                {this.state.yourArticles.map((article, idx) => {
                    return <div key={idx} className="col-md-6">
                        <Article imgsrc={article.image} title={article.title} description={article.description} 
                            name ={article.author.name} image = {article.author.image} minutesToRead = {article.minutesToRead}
                            postedDate = {article.postedDate} memberPreview={article.memberPreview} hasAudioAvailable={article.hasAudioAvailable}/>
                    </div>
                })}
            </div>
         );
    }
}
 
export default forYou;