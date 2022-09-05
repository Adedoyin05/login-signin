import React from 'react'
import { useNavigate } from "react-router-dom";
import './SignUp.css';

function SignUp() {
    let navigate = useNavigate();
    function goto(){
      navigate(`/Home);
    `);
  }
  return (
    // <div id='homepage'>
        <div className="main">
            < div className="sub-main">
              <div>
                <h1 id='login-header' text="welcome">Welcome</h1>
              
              <div>
                <input type="text" placeholder='username' className='name'/>
              </div>
              <div className='second-input'>
              <input type="password" placeholder='password' className='name'/>
              </div>
              <div className='login-button'>
              <button>SignUp</button>
              </div>
              <p className='link'>
                  <a href='a'>Forgotten Password</a>
                   </p> 
                   <p className='break'>or</p>
                   {/* className='goto' */}
                   <a href=''  onClick={goto}>Go to HomePage</a>
                   {/* <h1 className='goto'> 
              <button  onClick={goto}>
                <h3 id='gotosignup'>Go to HomePage</h3></button>
              </h1> */}
                   
                  {/* <p className='goto'><a href='a'>Go to HomePage</a></p> */}
                
              
              </div>
                
            </div>    
          {/* </div> */}
        
     </div>
    
  )
}

export default SignUp