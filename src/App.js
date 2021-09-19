import React from 'react';
import Homepage from './page/homepage/homepage.compo';
import Header from './components/header/header-functions.compo.jsx';
import SigninAndUp from './page/register/sign-in-and-up.compo';
import signUp from './page/Sign-up/sign-up';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();

    this.state ={
      currentUser: null
    };
  }

  

  render(){
    return (
      <div >
     <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route  exact path='/' component={Homepage}></Route>/>
          <Route  path='/save' component={Homepage}></Route>/>
          <Route  path='/register' component={SigninAndUp}></Route>/>
          <Route path='/Sign-up'component={signUp}></Route>
       </Switch>
    </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
