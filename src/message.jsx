//import messages from './app.jsx';

import React, {Component} from 'react';
export class Message extends Component {
    render() {
      return (
        <main className='messages'>
          <div className="message">
            <span classNames="message-username">Anonymous1</span>
            <span className="message-content">I won't be impressed with technology until I can download food.</span>
          </div>
          <div className="message system">
            Anonymous1 changed their name to nomnom.
          </div>
        </main>
   ) } }
   export default Message