import React, { useState } from 'react'
import LoginPage from '../login-page/login-component'

function App() {

  const [user, setUser] = useState(null)

  const loginUser = (userName) => {
    setUser(userName)
    console.log('fired')
    console.log(userName)
  }


  return (
    <div className="App">
      <header className="App-header">
        {!user &&
          <LoginPage login={loginUser}/>
        }
      </header>
    </div>
  );
}

export default App;
