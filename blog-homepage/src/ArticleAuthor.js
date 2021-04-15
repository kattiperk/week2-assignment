import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YourArticles from './your-articles.json';

class ArticleAuthor extends Component {
    static propTypes = {
        name: PropTypes.arrayOf(PropTypes.string).isRequired,
        image: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    render() {
        return (
        <div class="card-author-holder">
            { YourArticles.map((post, id) => {
                return (
                    <div key={post.id} class="card-author">
                            <a>
                                <img scr={post.author.image}/>
                            </a>
                            <div>
                                <h5>{post.author.name}</h5>
                                <div>
                                    <p>
                                        {post.postedDate}
                                    </p>
                                    <p>
                                        {post.minutesToRead}
                                    </p>
                                </div>
                            </div>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default ArticleAuthor