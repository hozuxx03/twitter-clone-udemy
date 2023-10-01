import './App.css';
import Sideber from './components/sidebar/Sideber';
import TweetBox from './components/timeline/TweetBox';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sideber />

      {/* Timeline */}
      <TweetBox />


      {/* Widget */}
    </div>
  );
}

export default App;
