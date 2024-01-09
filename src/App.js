import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sigin from './pages/Signin';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/signin' element={<Sigin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
// "/ for home"
// "/login  for login"
// "/signUp  for signup"
