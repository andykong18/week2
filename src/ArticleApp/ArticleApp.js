import React, { Component } from 'react';
import YourArticlesList from './YourArticlesList'
import MissedArticlesList from './MissedArticlesList'
import Articles from './Articles'


class ArticleApp extends Component {

    render() {
        return (
            <div className="ArticleApp">
                <h3>For you</h3>
                <hr></hr>
                <YourArticlesList />
                <h3>In case you missed it</h3>
                <hr></hr>
                <MissedArticlesList />
                <h3>New Articles</h3>
                <hr></hr>
                <Articles />
            </div>
        )
    }
}

export default ArticleApp;
