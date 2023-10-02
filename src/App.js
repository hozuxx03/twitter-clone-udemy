import  Timeline  from './components/timeline/Timeline.js';
import './App.css';
import Sideber from './components/sidebar/Sideber';
import Widgets from './components/widget/Widgets.js';



function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sideber />
      {/* Timeline */}
      <Timeline />
      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
