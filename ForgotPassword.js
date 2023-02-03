
import {useState} from "react";
import {getAuth,sendPasswordResetEmail} from "firebase/auth"
import {Link , useNavigate } from "react-router-dom"
import {useEffect} from "react";
function ForgotPassword()
{
const nav=useNavigate();

const [un,setUn] =useState("")
const [ans,setAns] =useState("")

useEffect(()=>{

 const un=localStorage.getItem("un");
 if(un!=null)
  nav("/forgotpass");
},[]);

const hUn=(event)=>{setUn(event.target.value)}

const save=(event)=>
{
event.preventDefault()
const auth=getAuth()
sendPasswordResetEmail(auth,un)
.then(res=>
  {
    alert("please check your email !")
    nav("/login")})
.catch(err=>setAns("inavlid email"))
}
return(
<>
<center>
 <form onSubmit={save} className="frame3">
 <h1 >Forgot Password</h1>
  <input type="email" placeholder="enter reg email" onChange={hUn} style={{color:"black",borderStyle:"groove"}}/>
  <br/><br/>
 <input type="submit" value="change password" style={{color:"black",background:"#FF4F00" , width:290 , height:50 }}/>
 <br/>
 <h5 className="btn"><Link to="/login" style={{color:"black"}}>LOGIN</Link></h5>
</form>

<h1>{ans}</h1>
</center> 
</>
);
}
export default ForgotPassword;