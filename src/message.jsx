//import messages from './app.jsx';
import MessageList from './messageList.jsx';
import React, {Component} from 'react';
export class Message extends Component {
    render() {
      return (
          <div className="message">
            <span className="message-username">Brayden</span>
      <span className="message-content">{'1'}</span>
      {console.log('second' + this.props.messagetext)}
          </div>
   ) } }
   export default Message