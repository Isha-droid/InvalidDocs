import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Valid from './components/Valid';
import Invalid from './components/Invalid';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valid" element={<Valid />} />
          <Route path="/invalid" element={<Invalid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
