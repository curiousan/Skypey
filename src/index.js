import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const fancyLog= ()=>  {
  console.log('%c Rendered with 👉 color: #FFF');
  console.log(store.getState());
}
const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
  fancyLog()
}
render();
store.subscribe(render);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
