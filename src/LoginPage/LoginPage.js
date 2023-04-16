import React from "react";
import'./LoginPage.css'
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'

function LoginPage(){
    const navigate = useNavigate()
    const handleLogin= () => {
      navigate("/Dashboard")
    }
    return(
    <div className="Login">
<div className="facebook">
    <div className="facebooktext">
        facebook
    </div>
    <div className="title">
    Facebook helps you connect<br></br> and share with people.
    </div>
</div>
<div className="LoginContainer">
    <div className="LoginDetails">
        <input type="email" placeholder="Email  or phone number"/>
            <br></br>
            <input type="password" placeholder="Password"/>
                <br></br>
                <button className="btn" onClick={()=>handleLogin()}>
                    {/* <Link to="/HeaderArea">LogIn</Link> */}
                    Login
                </button>
    </div>
    <div className="forget">
        <a href="forget">forgot password?</a>
        <br>
        </br>
        <button className="btns">
            create new account
        </button>
    </div>
    
    <br></br>
    <div className="page">
        <a href="Createpage"><b>Create a Page</b></a> for celebrity, brand or business. 
    </div>
   </div>
 </div>
            
       
       
    )
}
export default LoginPage 