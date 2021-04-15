import React, { Component } from 'react';
import ArticleContent from './ArticleContent';
import ArticleAuthor from './ArticleAuthor';
// import missedArticles from './missed-articles.json';


class Article extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     title: [

        //     ],
        //     desc: [

        //     ]
        // }
    }

    render() {
        return (
            <div class="card-wrap">
                <div class="card-image-holder">
                    <img />
                </div>
                <div class="card-content-holder">
                    <div class="card-content-features">
                        <div class="card-content-audio">
                            <img />
                            <p></p>
                        </div>
                        <div class="card-contet-member-preview">
                            <img />
                            <p></p>
                        </div>
                    </div>
                    <ArticleContent  />
                    <div class="card-content-data-holder">
                        <ArticleAuthor />
                        <div class="card-content-buttons">
                            <a>
                                <img />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Article;