import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/index';
import FormBuilderPage from './pages/FormBuilderPage/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form-builder" element={<FormBuilderPage />} />
      </Routes>
    </Router>
  );
};


export default App;
