const Welcome = ({user}) => {
   
    return (
     

      <div className="welcome">
      <p>Welcome username: {user.username.toUpperCase()|| user.username.toLowerCase()}</p>
     
      
      
      </div>



       
    )
  }
  
  export default Welcome