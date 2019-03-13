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
      user: 'Brayden',
      messages: [
        {
          id: '1',
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: '2',
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
  };
  }
  componentDidMount() {
    var socket = new WebSocket("ws://localhost:3001", console.log('Connected to server'));
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }
  newMessage (evt) {
    if (evt.keyCode === 13) {
      let theMessage = {id: Math.floor(100000 + Math.random() * 900000), username: this.state.user, content: evt.target.value};
      const messages = this.state.messages.concat(theMessage)
      this.setState({messages: messages})
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