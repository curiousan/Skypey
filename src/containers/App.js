import React  from 'react';
import './App.css';
import SideBar from '../components/SideBar';
import Main from '../components/Main';
import store from '../store';
import _ from 'lodash';

const App = ()=> {
  const { contacts, user, activeUserId  } = store.getState();
  return (<div className ="App">
    <SideBar contacts = { _.values(contacts) }/>
    <Main user={user} activeUserId={activeUserId}/>
  </div>);

}

export default App;
