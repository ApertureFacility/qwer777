import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FormBuilder from './FormBuilder';
import Home from './Home'

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormBuilder />} />
        </Routes>
      </Router>
  );
};

export default App;