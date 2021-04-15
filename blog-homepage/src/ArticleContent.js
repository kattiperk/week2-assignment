import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YourArticles from './your-articles.json';

class ArticleContent extends Component {
    static propTypes = {
        title: PropTypes.arrayOf(PropTypes.string).isRequired,
        desc: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    render() {
        return (
        <div class="articles-holder">
            { YourArticles.map((post, id) => {
                return (
                    <div class="card-content-text-holder">
                        <div key={post.id}>
                            <h1><a href={post.link}>{post.title}</a></h1>
                            <p>{post.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default ArticleContent