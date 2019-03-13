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
    this.state = {
      user: 'Bob',
      messages: []
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
    console.log(event.data);
      const messages = this.state.messages.concat(JSON.parse(event.data))
    this.setState({messages: messages})
  }

  }
  newMessage(evt) {
    if (evt.keyCode === 13) {
      let theMessage = {username: this.state.user, content: evt.target.value};
     // const messages = this.state.messages.concat(theMessage)
      //this.setState({messages: messages})
      this.state.socket.send(JSON.stringify(theMessage));
      evt.target.value = ''
    }
  };

  render() {
   return (
     <div>
     <Footer1 />
      <MessageList messages={this.state.messages}/>
       
       <ChatBar  curerentUser={this.state.user} newMessage={this.newMessage}/>
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