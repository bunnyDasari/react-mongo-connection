import { useState } from "react";
import axios from "axios"
function App() {
  const [name,setName] = useState("")
  const [pass,setPass] = useState("")
  const [cPass,setCpass] = useState("")
 

  const onSubmit = (e)=>{
     e.preventDefault()
     axios.post("http://localhost:3001/login",{
      name,pass,cPass
     }).then(result => console.log(result)).catch(err => console.log(err))
     
  }
  const onChangeName = (e)=>{
     setName(e.target.value)
     
  }
  const onChangePass = (e)=>{
     setPass(e.target.value)
     console.log(pass)

  }
  const onChangeCpass = (e)=>{
    setCpass(e.target.value)
    console.log(cPass)
  }
  return (
    
    <div>
      <form>
        <input type='text' value={name} onChange={onChangeName}/>
        <input type='password' value={pass}onChange={onChangePass}/>
        <input type='password'value={cPass}onChange={onChangeCpass}/>
      </form>
        <button onClick={onSubmit}>submit</button>
      
    </div>
  );
}

export default App;
