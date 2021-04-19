import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import yourArticles from './your-articles.json';

const article = yourArticles.data;
console.log(article);
// const date = new Date(article[0].postedDate).toString; // make hardcoded array with monthes
// let month = date.toString();
// var month = new Date(date).getMonth() + ;
// console.log(date);

class Article extends Component {
    static propTypes = {
        post: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    render() {
        
        // const post = this.props;
        // const date = article.postedDate;
        // let elapsed = date.getDate();
        // console.log(date)

        return (
        <div class="aticles-holder">
            {article.map((post, id) => {
                return (
                    <div class="card-wrap">
                        <div class="card-wrap-inner">
                            <div class="card-image-holder" style={{backgroundImage: `url(${post.image})`}}>
                                <a href={post.link}></a>
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
                                <div key={id} class="card-content-text-holder">
                                    <h4><a href={post.link}>{this.props.article.title}</a></h4>
                                    <p>{post.description}</p>
                                </div>
                                <div class="card-content-data-holder">
                                    <div class="card-content-data-inner">
                                        {/* <img src={post.author.image} class="card-author-image"/>
                                        <div key={post.id} class="card-author">
                                            <h5>{post.author.name}</h5>
                                                <p>
                                                    {post.postedDate}
                                                </p>
                                                <p>
                                                    {post.minutesToRead} min read
                                                </p>
                                        </div> */}
                                        {/* <ArcitleAuthor /> */}
                                        <div class="card-content-button">
                                            <a href="">
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
            })}
        </div>
        )

    
    }
}

export default Article