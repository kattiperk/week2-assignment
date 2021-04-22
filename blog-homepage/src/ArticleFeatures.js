import React, { Component } from 'react';
import PropTypes from 'prop-types';
import star from './svg/star.svg';
import audio from './svg/volume.svg';

class ArticleFeatures extends Component {
    static propTypes = {
        article: PropTypes.shape({
            hasAudioAvailable: PropTypes.bool,
            memberPreview: PropTypes.bool
        })
    } 
    
    render() {
        const audioVisibility = this.props.article.hasAudioAvailable ? 'is-visible' : 'is-invisible';
        const memberVisibility = this.props.article.memberPreview ? 'is-visible' : 'is-invisible';
        const visibility = () => {
            if (this.props.article.hasAudioAvailable || this.props.article.memberPreview) {
                return 'is-visible'
            } else {
                return 'is-invisible'
            }
        }

        return (
            
                        <div class={`card-content-features ${visibility()}`}>
                            <div
                                className={`card-content-features-inner card-content-audio ${audioVisibility}`}
                            >
                                <span>Audio availbale</span>
                            </div>
                            <div
                                className={`card-content-features-inner card-content-member ${memberVisibility}`}
                            >
                                <span>Member preview</span>
                            </div>
                        </div>
        )
    }
}

export default ArticleFeatures