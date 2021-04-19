import './App.css';
// import Article from './Article';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import Article from './Article';

function App() {
  return (
    <div className="main-wrapper">
      <div className="for-you">
        <h2>For you</h2>
        <div className="aticles-holder">
          {yourArticles.map((article, idx) => {
            return <Article article={article} key='idx' />
          })}
        </div>
      </div>
      <div className="in-case-you-missed">
        <h2>In case you missed it</h2>
        <div className="aticles-holder">
          {missedArticles.map((article, idx) => {
            return <Article article={article} key='idx' />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
