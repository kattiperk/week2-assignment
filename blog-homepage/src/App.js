import './App.css';
import Article from './Article';
import ArticleContent from './ArticleContent';
import ArticleAuthor from './ArticleAuthor'

function App() {
  return (
    <div className="main-wrapper">
      <div className="for-you">
        <h2>For you</h2>
        
          <Article />
          
      </div>
      <div className="in-case-you-missed">
        <h2>In case you missed it</h2>
        <div className="articles-holder">
          {/* <Article /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
