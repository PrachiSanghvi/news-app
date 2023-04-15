import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NewsList from './pages/newsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Calling news data in base url */}
        <Route path='/' element={<NewsList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
