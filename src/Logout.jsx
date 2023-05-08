const Logout = ({user}) => {
     function handleClick(){
        confirm("Are your sure?")
        window.location.href="./index.html"

    }
    return (
        <>
        <div className="logout">
            <p>Logout: {user.username.toUpperCase()}</p>
            <button onClick={handleClick 
            } className="out">Logout</button>
        </div>
        
        </>
      
    )
  }
  
  export default Logout