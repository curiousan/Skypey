import user from './user';
import contacts from './contacts';
import message from './message';
import typing from'./typing'
import { combineReducers } from 'redux';
import activeUserId from "./activeUserId";
export default combineReducers({
    user,
    contacts,
    activeUserId,
    message,
    typing

})