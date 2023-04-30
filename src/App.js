import './App.scss';  
import {Routes,Route} from 'react-router-dom'
import FirstPage from './pages/firstPage'
import SecondPage from './pages/seconPage';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<FirstPage/>} />
    <Route path="/next" element={<SecondPage/>} />
    </Routes>
    </>
  );
}

export default App;
