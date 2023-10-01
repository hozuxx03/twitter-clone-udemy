import './App.css';
import Sideber from './components/sidebar/Sideber';
import Timeline from './components/timeline/Timeline';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sideber />

      {/* Timeline */}
      <Timeline />


      {/* Widget */}
    </div>
  );
}

export default App;
