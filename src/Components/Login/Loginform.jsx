import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'




const Loginform = () => { 
    const navigate = useNavigate();
const [smail, setemail] = useState("")
const [spassword, setspassword] = useState("")
const [serror,seterror] = useState('')
const handleemail = (e)=>{
    setemail(e.target.value)
    seterror("")
    
}
const handlepass=(e)=>{
    setspassword(e.target.value)
    seterror("")

}
const checkcategory = ()=>{
    setemail("")
    setspassword("")
    if(smail == "" || spassword == "")return seterror("please enter valid cred")
    if(smail !== "admin"  || spassword !== "admin"){
        return seterror("Invalid credential"); 
    }
    else{
        navigate("/Home");
    
        
    }
  
}
  return (
    <div>
        <div className='maincontainer'>
            <div className='formcontainer'>
                <div className='leftpart'>
                    <h1>Welcome back to <br/> pretty Login</h1>
                    <p style={{marginTop:"-10px"}}>it's great to have you back!</p>
                    <p style={{color:"red"}}>{serror}</p>
                    <label style={{fontWeight:"700"}}>Email:</label>
                    <input type="text" value={smail} onChange={handleemail} placeholder="email = admin" className='usi'></input>
                    <label style={{fontWeight:"700"}}>Password:</label>
                    <input type="password"  value={spassword} onChange={handlepass} placeholder="password = admin" className='psi'></input>
                    <div className='check'>
                       <label><input type="checkbox" ></input>Remember me ?</label>
                       <p>Forget Password?</p>
                    </div>
                    <div className='twobutton'>
                        <button onClick={checkcategory}>LOGIN</button>
                        <button>CREATE ACCOUNT</button>
                    </div>
                    <p style={{textAlign:"center"}}>or login with</p>
                    <h3 style={{textAlign:"center" , marginTop:"-10px",color:"#D430B4"}}>Facebook  &nbsp; Google+</h3>
                </div>
                <div className='rightpart'>
                    <img src='Images/loginformimage.jpg'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loginform