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
        const displayDate = () => {
            const months = [
                'January','February','March','April','May','June','July','August','September','October','November','December'
            ];
            const month = new Date(this.props.article.postedDate).getMonth();
            const date = new Date(this.props.article.postedDate).getDate();
            return `${months[month]} ${date}`;
        }

        return (
            <div>
                <img src={this.props.author.image} className="card-author-image"/>
                <div className="card-author">
                    <h5>{this.props.author.name}</h5>
                        <span>
                        {displayDate()}&nbsp;&#183;&nbsp;
                        </span>
                        <span>
                            {this.props.article.minutesToRead} min read
                        </span>
                </div>
            </div>
        )
    }
}

export default ArticleAuthor;