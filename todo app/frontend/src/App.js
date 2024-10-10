import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import About from './components/About/About.js';
import SignUp from './components/SignUp/SignUp.js';
import LogIn from './components/LogIn/LogIn.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Todo from './components/Todo/Todo.js';
function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/todo" element={<Todo/>}></Route>
        <Route exact path="/signUp" element={<SignUp/>}></Route>
        <Route exact path="/logIn" element={<LogIn/>}></Route>
      </Routes>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
