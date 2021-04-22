import React, { Component } from 'react';
import ArticleAuthor from './ArticleAuthor.js';
import ArticleFeatures from './ArticleFeatures.js';
import PropTypes from 'prop-types';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            image: PropTypes.string,
            link: PropTypes.string
        })
    }

    state = { inBookmarks: false }

    toggleBookmark = () => {
        this.setState({
            inBookmarks: !this.state.inBookmarks
        })
    }
      
    
    render() {
        const bookmarkExist = this.state.inBookmarks ? 'added' : 'removed';

        return (
            <div className="card-wrap">
                <div className="card-wrap-inner">
                    <div className="card-image-holder" style={{backgroundImage: `url(${this.props.article.image})`}}>
                        <a href={this.props.article.link} title={this.props.article.title} target="_blank" rel="noreferrer"></a>
                    </div>
                    <div className="card-content-holder">
                        <ArticleFeatures article={this.props.article} />
                        <div className="card-content-text-holder">
                            <h4><a href={this.props.article.link} target="_blank" rel="noreferrer">{this.props.article.title}</a></h4>
                            <p><a href={this.props.article.link} target="_blank" rel="noreferrer">{this.props.article.description}</a></p>
                        </div>
                        <div className="card-content-data-holder">
                            <div className="card-content-data-inner">
                                <ArticleAuthor author={this.props.article.author} article={this.props.article} />
                                <div className="card-content-button">
                                    <span onClick={this.toggleBookmark} className={`bookmark ${bookmarkExist}`}>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article