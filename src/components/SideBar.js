import React from 'react';
import './SideBar.css';
import User from '../containers/User';
import _ from 'lodash';

const SideBar = ({contacts})=>{
  console.log(contacts);
  const element = _.values(contacts[0]).map((contact,i) =>{
      return <User user={contact} key={contact.user_id+i} ></User>;
  })

  return <aside className="side-bar">
            {element}
         </aside>;

};

export default SideBar;