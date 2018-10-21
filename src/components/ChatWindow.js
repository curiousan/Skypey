import React from 'react';
import store from '../store';
import Header from '../components/Header';
import Chat from '../containers/Chat';
import './ChatWindow.css';
import _ from 'lodash';
import MessageInput from "../containers/MessageInput";

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const { typing } = state;
    const activeMsg = state.message[activeUserId];
    console.log(state);
    const activeUser = state.contacts.contacts[activeUserId];
    console.log(activeUser);
    return (
        <div className="chat-window">
            <Header user={activeUser}/>
            <Chat messages={_.values(activeMsg)}/>
            <MessageInput value={typing} />

        </div>
    ); };
export default ChatWindow;