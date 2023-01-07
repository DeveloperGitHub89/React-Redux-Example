import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { RegistrationForm } from './components/RegistrationForm';
import { ScoreBoard } from './components/ScoreBoard';
import { SignUp } from './components/SignUp';
import { UsersData } from './components/UsersData';

function App() {
  return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/score-board' element={<ScoreBoard></ScoreBoard>}></Route>
          <Route path='/users' element={<UsersData></UsersData>}></Route>
          <Route path='/register' element={<SignUp></SignUp>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
