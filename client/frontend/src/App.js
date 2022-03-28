import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import UserAccount from './UserAccount'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/account" element={<UserAccount/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
