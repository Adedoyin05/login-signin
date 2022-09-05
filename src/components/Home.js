import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate = useNavigate()
    function goto(){
        navigate(`/Login`);
    }

  return (
    <div id='homepage'>
        <h1 >HOMEPAGE</h1>
        <button onClick={goto}>Go to LogIn</button>
    </div>
  )
}

export default Home