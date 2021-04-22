import './App.css';
import './css/Article.css';
import './css/ArticleAuthor.css';
import './css/ArticleFeatures.css';
import Article from './Article';
import yourArticles from './_data/your-articles.json';
import missedArticles from './_data/missed-articles.json';

function App() {
  return (
    <div className="main-wrapper">
      <div className="for-you">
        <h2>For you</h2>
        <div className="aticles-holder">
          {yourArticles.map((yourArticle, idx) => {
            return <Article article={yourArticle} key="idx" />
          })}
        </div>
      </div>
      <div className="in-case-you-missed">
        <h2>In case you missed it</h2>
        <div className="aticles-holder">
          {missedArticles.map((missedArticle, id) => {
            return <Article article={missedArticle} key="id" />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;