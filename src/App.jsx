import { useState } from "react"
import Welcome from "./Welcome";
import Login from "./Login";
import Logout from "./Logout";
import "./App.css"




function App() {
  let[isLogged,setIsLogged] = useState(false);

  let[user,setUser] = useState({username:'',password:''});
  return (
    <>
      
      { isLogged ? (<Welcome user={user}/>) : <Login user={user} setUser={setUser}  setIsLogged={setIsLogged}/> 
      
      }
      {
        isLogged ? (<Logout user={user}/>) :<></> 
      }
   
    </>
  )
}

export default App