import React from 'react';
import './User.css';
import {setActiveUserId} from "../actions";
import store from '../store'

const User = ({ user }) =>{
  const {name, profile_pic, status,key } = user;
  const handleUserClick =({user_id}) =>{
      store.dispatch(setActiveUserId(user_id))
    }

  return (
    <div className="user" onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className="user__pic" />
      <div className="user__details">
        <p className="user__details-name">{name}</p>
        <p className="user__details-status">{status}</p>
      </div>
    </div>

  );
}

export default User;