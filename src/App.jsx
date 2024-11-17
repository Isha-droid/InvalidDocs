import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Valid from './components/Valid';
import Invalid from './components/Invalid';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Valid/>} />
          <Route path="/correct" element={<Valid />} />
          <Route path="/incorrect" element={<Invalid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
