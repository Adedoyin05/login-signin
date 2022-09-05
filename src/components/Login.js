import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'



  




function Login() {
    let navigate = useNavigate();
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    function goto(){
        navigate(`/SignUp`);
    }
    
    function passwordChangeFunction(e) {
        setEnteredPassword(e.target.value)
    }

    function emailChangeFunction(e) {
        setEnteredEmail(e.target.value)
    }
    
    return (
     
      <div className="App">
        <div id='square'>
  
                 <div id='pattern'>
          <div id='login'>
          <h1 id='login-header'>Login</h1>
          </div>
          <div id='details'>
          Email address<br></br>
          <input className='input' type="email" value={enteredEmail} placeholder='Enter your Email' onChange={emailChangeFunction}></input><br></br>
          <div className='password'>
          Password<br></br>
          <input className='input' type="password" value={enteredPassword} placeholder='Enter your password' onChange={passwordChangeFunction}></input><br></br>
           {/* <input id='box' type='checkbox'></input><p className='pass'>Show password</p> */}
           <div className='free'>
           <a ><button className='button'>  Login &#8594;</button></a><br></br>
          </div>
          </div>
          </div>
        </div>
          <div id='blur'>
          <div id='good'>
            <p>
              THE<span className='bold'>GOOD</span ><br></br> NETWORK
            </p>
            <p className='line'>_______<br></br></p>
            <p className='we'>
            We are <br></br>
            
            </p>
          </div>
          <p className='invite'>
              Invite only right now.
              <p className='million'>
                10 Million+ people have joined our network. <br></br>
                We invite you to join the tribe. <br></br>
              </p>
              <p className='created'>
                Already have an account?
              </p>
              <h1 className='sign-in'> 
              <button id='signme' onClick={goto}>
                <h3 id='gotosignup'>Create an account</h3></button>
              </h1>
            </p>
          </div>
  
        </div>
        <div >
       
          </div>
      </div>
    );
  }
  
  export default Login;
  