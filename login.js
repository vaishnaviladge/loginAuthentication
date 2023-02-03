
import {useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {Link, useNavigate } from "react-router-dom";
import user3 from "./user3.png";
import fb from "./fb.png";
import ins from "./ins.png";
import twit from "./twit.png";
import shopping from "./shopping.png";
import {useEffect} from "react";
function Login()
{

const nav=useNavigate();
useEffect(()=>{

 const un=localStorage.getItem("un");
 if(un!=null)
  nav("/login");
},[]);

const [un,setUn] =useState("")
const [pw,setPw] =useState("")

const hUn=(event)=>{setUn(event.target.value)}
const hPw=(event)=>{setPw(event.target.value)}


const check=(event)=>
{
event.preventDefault()
const auth=getAuth()
signInWithEmailAndPassword(auth,un,pw)
.then(res=>{
localStorage.setItem("un",un);
alert("login successfully");
nav("/")
})
.catch(err=>alert("Invalid Username or Password !"))
}
return(

<>
<center>
<div class="split left">
 <form onSubmit={check} class="frame">
  <br/>
 <img src={user3} className="user"/>
 <h3><strong><i>Sign In</i></strong></h3>
 <img src={fb} className="social" /><img src={ins} className="social" /><img src={twit} className="social" />
 <br/><br/>
  <input type="email" placeholder="enter email" onChange={hUn} style={{color:"black",borderStyle:"groove"}} />
  <br/><br/>  
  <input type="password" placeholder="enter password" onChange={hPw} style={{color:"black",borderStyle:"groove"}}/>
  <h1  ><Link to="/forgotpass" style={{ fontSize: 20 }} > Forgot Password </Link></h1>
  <br/>
 <input type="submit" value="SIGN IN" style={{color:"black",background:"#FF4F00" , width:150 , height:50 }} />
 <h3 style={{color:"black",fontSize:20}}>Don't have an account?<Link to="/signup" style={{fontSize:20 }} > SIGN UP </Link></h3>
<br/>
</form>
</div>
<div class="split right">
  <div class="centered">
    <img src={shopping} style={{height:"50%",width:"50%"}}/>
  <h1  style={{fontFamily:"magica" , fontSize:50  }}><i>Online shopping</i></h1>
  <p className="para">Live with a modern look personality with socliche clothing that offers women dresses online in large discounts prices and with the whole sale also.</p>
  <p style={{color:"white"}}>Sign in to continue access</p>
 </div>
</div>
</center>
</>
);

}
export default Login;