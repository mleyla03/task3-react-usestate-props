
import { data } from "./user.js";
const Login = ({setIsLogged,user,setUser}) => {
  function handleSubmit(e){
    e.preventDefault();
    let found = data.find((item)=>item.username==user.username && item.password == user.password );
    if (found===undefined)
        found=false;
        
    else
        found = true;
    setIsLogged(found);
  }
  
  
  function handleChange(e){
    setUser({...user,[e.target.name]:e.target.value});
  }
  return (
    
    <form onSubmit={(e)=>handleSubmit(e)}>
        <h3>Login</h3>
        <input name="username" onChange={(e)=>handleChange(e)} placeholder="username" type='text' required/>
        <input name="password" onChange={(e)=>handleChange(e)} placeholder="password" type='password' required/>
        <button className="login" type="submit">Login</button>
    </form>
  )

}

export default Login