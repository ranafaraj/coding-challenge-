import './App.css';
import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/User/Users.jsx'
import { Route, Switch } from "react-router-dom";
import Posts from './components/Posts/Posts.jsx'



function App() {
  const [userId, setUserId]= useState('');
  console.log(userId)
  return (
    

    <div className="App">
     <Switch>
       <Route exact path="/"> 
          <Users setUserId= {setUserId}/>
       </Route>
       <Route exact path="/userId">
          <Posts userId={userId}/>
       </Route>
       
     </Switch>
      
      
    </div>
  );
}

export default App;
