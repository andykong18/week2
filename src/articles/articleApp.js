import React, { Component } from 'react';
import ForYou from './forYou';
import MissedArticle from './missed';

class articleApp extends Component {

    render() { 
        return ( 
            <div className="articleApp">
                <h3>For you</h3>
                <hr />
                <ForYou />
                <br />
                <h3>In case you missed it</h3>
                <hr />
                <MissedArticle />
            </div>
         );
    }
}
 
export default articleApp;
