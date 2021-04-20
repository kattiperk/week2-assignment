import React, { Component } from 'react';
import ArticleAuthor from './ArticleAuthor.js'
import PropTypes from 'prop-types';

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
        const audio = () => {
            if (this.props.article.hasAudioAvailable === true) {
                return `Audio availbale`
            }
        }

        const member = () => {
            if (this.props.article.memberPreview === true) {
                return `Member preview`
            }
        }


        return (
            <div className="card-wrap">
                <div className="card-wrap-inner">
                    <div className="card-image-holder" style={{backgroundImage: `url(${this.props.article.image})`}}>
                        <a href={this.props.article.link}></a>
                    </div>
                    <div className="card-content-holder">
                        <div className="card-content-features">
                            <div className="card-content-audio">{audio()}</div>
                            <div className="card-contet-member-preview">{member()}</div>
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
                                        <svg width="25" height="25" viewBox="0 0 25 25">
                                            <path d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z" fill-rule="evenodd"></path>
                                        </svg>
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