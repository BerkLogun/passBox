
import './App.css';
import {useState} from "react";

function App() {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [website, setWebsite] = useState('')

  return (
    <div className="App">
        <div className="addPassword">
          <input type="text" placeholder="Username" onchange={(event) => setUsername(event.target.value)}/>
          <input type="text" placeholder="Password" onchange={(event) => setPassword(event.target.value)}/>
          <input type="text" placeholder="password website" onchange={(event) => setWebsite(event.target.value)}/>
          <button>Add Password</button>
        </div>
    </div>
  )
}

export default App;
