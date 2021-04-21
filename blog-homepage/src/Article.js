import React, { Component } from 'react';
import ArticleAuthor from './ArticleAuthor.js'
import PropTypes from 'prop-types';
import bookmark from './svg/bookmark.svg';
import star from './svg/star.svg';
import audio from './svg/volume.svg';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            image: PropTypes.string,
            link: PropTypes.string,
            postedDate: PropTypes.string,
            minutesToRead: PropTypes.number,
            hasAudioAvailable: PropTypes.bool,
            memberPreview: PropTypes.bool
        })
    }
    
    render() {


        return (
            <div className="card-wrap">
                <div className="card-wrap-inner">
                    <div className="card-image-holder" style={{backgroundImage: `url(${this.props.article.image})`}}>
                        <a href={this.props.article.link}></a>
                    </div>
                    <div className="card-content-holder">
                            <div
                                className={this.props.article.hasAudioAvailable ? 'card-content-audio is-visible' : 'card-content-audio is-invisible'}
                            >
                                Audio availbale
                            </div>
                            <div 
                                className={this.props.article.memberPreview ? 'card-content-member is-visible' : 'card-content-member is-invisible'}
                            >
                                Member preview
                            </div>
                        <div className="card-content-text-holder">
                            <h4><a href={this.props.article.link}>{this.props.article.title}</a></h4>
                            <p>{this.props.article.description}</p>
                        </div>
                        <div className="card-content-data-holder">
                            <div className="card-content-data-inner">
                                <ArticleAuthor author={this.props.article.author} article={this.props.article} />
                                <div className="card-content-button">
                                    <a href="#">
                                        <img src={bookmark} alt="bookmark" />
                                    </a>
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