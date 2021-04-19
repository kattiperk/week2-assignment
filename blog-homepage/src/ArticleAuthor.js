import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleAuthor extends Component {
    static propTypes = {
            author: PropTypes.shape({
                name: PropTypes.string,
                image: PropTypes.string,
                isMediumMember: PropTypes.bool
            }),
            article: PropTypes.shape({
                postedDate: PropTypes.string,
                minutesToRead: PropTypes.number,
                hasAudioAvailable: PropTypes.bool,
                memberPreview: PropTypes.bool
            })
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <img src={this.props.author.image} class="card-author-image"/>
                                <div class="card-author">
                                    <h5>{this.props.author.name}</h5>
                                        <p>
                                            {this.props.article.postedDate}
                                        </p>
                                        <p>
                                            {this.props.article.minutesToRead} min read
                                        </p>
                                </div>
            </div>
        )
    }
}

export default ArticleAuthor;