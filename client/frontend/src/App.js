import './App.css'

function App() {
  return (
   <>
     <body>
     <h1 className="title">Dawit's Bank</h1>
     <div className="login_div">
       <form className="login_form">
         <h4>Username: </h4>
         <input type="text"/> <br/>
         <h4>Password: </h4>
         <input type="text"/> <br/>
         <button type="submit">Login</button>
           <a href="#">New User? Create Account</a>
       </form>
     </div>
     </body>
   </>
  );
}

export default App;
