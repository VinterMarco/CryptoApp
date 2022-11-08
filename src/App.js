import './App.css';
import Stocks from "./components/stocks";
import {useState} from "react";
import LoginForm from "./components/LoginForm";
import img1 from './components/assets/img1.png';
import  {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
    const adminUser= {
        email : 'vintermarco98@gmail.com',
        password : '12345'
    }

    const [user,setUser] = useState({ email:""})

    const Logout = () => {
        setUser({name:"" , email:""})
    }

    const Login = details => {
       if(details.email === adminUser.email
       && details.password === adminUser.password) {
           setUser({
               email: details.email,
               password: details.password,
           })
       } else  {
           console.log('doesnt work')
       }

    }
    return (
    <div className="App">
        {(user.email !== '') ? (
            <div>
                <button onClick={Logout} className='logoutbtn'>log out</button>
                <Stocks/>
            </div>
        ) : (
            <div>
                <Navbar/>
                <div className='landPageWrapper'>
                    <div className='left'>
                    <h2 className='info1'>Jump start your crypto portfolio</h2>
                    <p className='info2'>Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</p>
            <LoginForm Login={Login}/>
                        </div>
                    <div className='img'>
                        <img src={img1} alt=""/>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}

export default App;
