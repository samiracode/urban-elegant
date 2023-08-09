import { Routes, Route } from 'react-router-dom';

import Home from './components/routes/home/home.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
    </Routes>
  );
};

export default App;
