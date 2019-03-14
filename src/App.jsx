import React, {Component} from 'react';
import MessageList from './messageList.jsx';
import ChatBar from './ChatBar.jsx';
import Footer1 from './foot1.jsx';
import '../styles/application.scss';

//import ReactDOM from 'react-dom';

// main class
class App extends Component {
  constructor(props) {
    super(props);
this.newMessage = this.newMessage.bind(this)
this.newUser = this.newUser.bind(this)
    this.state = {
      user: 'Anon',
      messages: [],
      notifications: [],
      counter:'1'
  };
  }
  componentDidMount() {
    var socket = new WebSocket("ws://localhost:3001", console.log('Connected to server'));
    this.setState({socket: socket})
    console.log("componentDidMount <App />");
    //setTimeout(() => {
     // console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
     // const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      //const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
     // this.setState({messages: messages})
    
   // }, 3000);
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
   
      //console.log(event.data);
    switch(data.type) {
      case 'incomingMessage':
        const message = this.state.messages.concat(JSON.parse(event.data))
        //console.log(message)
        this.setState({messages: message})
        break;
      case 'incomingNotification':
       
        const obj = JSON.parse(event.data)
        obj.username = `${obj.oldUserName} changed their name to ${obj.newUserName}`
        console.log(obj)
         const notification = this.state.messages.concat(obj)
         this.setState({messages: notification})
         

        break;
        case 'counterUpdate':
       
          const count = JSON.parse(event.data)

          console.log(count)
  
           this.setState({counter: count.counter})
           
  
            break;
        
        default:

          // show an error in the console if the message type is unknown
         throw new Error("Unknown event type " + data.type);
      }
  
  }

  }
  newMessage(evt) {
    if (evt.keyCode === 13) {
      let theMessage = {type: "postMessage", username: this.state.user, content: evt.target.value};
     // const messages = this.state.messages.concat(theMessage)
      //this.setState({messages: messages})
      this.state.socket.send(JSON.stringify(theMessage));
      evt.target.value = ''
    }
  };
  newUser(evt) {
    let oldUserName = this.state.user
    if (evt.keyCode === 13 && evt.target.value) {
   
   // console.log(oldUserName)
     let newUserName = evt.target.value;
     let theNotification = {type: "postNotification", oldUserName: oldUserName, newUserName : newUserName};
     //console.log(theNotification)
     this.state.socket.send(JSON.stringify(theNotification));

      this.setState({user: newUserName})
   console.log()
   
    }
  };
  render() {
   return (
     <div>
     <Footer1 counter={this.state.counter}/>
      <MessageList messages={this.state.messages} notifications={this.state.notifications}/>
       
       <ChatBar  curerentUser={this.state.user} newMessage={this.newMessage} newUser={this.newUser}/>
    </div>
   )
  }
}

 export default App;
 //render() {
 //   return (
   //   <h1>hell world</h1>

      
    
    //  ) } }
      /*
    
    class navBar extends Component {
  render() {
    return (
      <body>
      <nav className='navbar'>
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      </body>
 ) } }


 class footer1 extends Component {
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
   
   ) } }
render()
    
export default App;
*/