import React, {Component} from 'react';
import Message from './message.jsx';


export class MessageList extends Component { 

  
  render() {
    return (
      <main className='messages'>
        {this.props.messages.map((message) =>
          <div className="message" key={message.id}>
            <span className="message-username">{message.username}</span>
             <span className="message-content">{message.content}</span>
          </div>)}
        
          {this.props.notifications.map((notification) =>
     <div className="notification" key={notification.id}>
     <span className="notification-content">{notification.content}</span>
   </div>
          )}
        </main>
   ) } }
   export default MessageList