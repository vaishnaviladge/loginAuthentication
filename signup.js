
import {useState} from "react";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import signup from "./signup.png"
import success from "./success.png"
import {Link,useNavigate } from "react-router-dom"

import {useEffect} from "react";

function Sign()
{
const nav=useNavigate();

useEffect(()=>{
 const un=localStorage.getItem("un");
 if(un!=null)
  nav("/signup");
},[]);
const [un,setUn] =useState("")
const [pw1,setPw1] =useState("")
const [ans,setAns]=useState("")
const [pw2,setPw2] =useState("")

const hUn=(event)=>{setUn(event.target.value)}
const hPw1=(event)=>{setPw1(event.target.value)}
const hPw2=(event)=>{setPw2(event.target.value)}

const save=(event)=>
{
event.preventDefault()
if(pw1==pw2)
{
const auth=getAuth()
createUserWithEmailAndPassword(auth,un,pw1)
.then(res=>{
  alert("Sign up successfully")
  nav("/login")})
.catch(err=>setAns("username aleredy in use"))
}
else
{
setAns("password did not match")
}
}
return(
<>
<center>
  <div  class="split right1">
 <form onSubmit={save} className="frame2">
  <br/>
    <img src={signup} width="90"/>
  <h1 class="hd" style={{fontfamily:"Book Antiqua",fontSize:40}}><i><strong>Sign Up</strong></i></h1>
    <input type="email" placeholder="enter reg email" onChange={hUn} style={{color:"black",borderStyle:"groove"}}/>
  <br/><br/>
    <input type="password" placeholder="enter password" onChange={hPw1} style={{color:"black",borderStyle:"groove"}}/>
  <br/><br/>
    <input type="password" placeholder="enter confirm  password" onChange={hPw2} style={{color:"black",borderStyle:"groove"}}/>
  <br/>
  <h5 style={{color:"black",fontSize:20}}>Already have an account?<Link to="/login"  style={{fontSize:20 }} >LOGIN</Link></h5>
    <input type="submit" value="SignUp" style={{color:"black",background:"#FF4F00" , width:150 , height:50 }}/>
<br/><br/>
<div className="split left1">
<div class="centered">
<h1  style={{color:"white",fontFamily:"arial" , fontsize:"200"}}><i>Sign Up</i></h1>
  <p className="para"> to use all the features of our application</p>
  <br/>
 <img src={success} width="350" height="300"/>
</div>
</div>
</form>
<h1>{ans}</h1>
</div>
</center>
</>
);
}
export default Sign;