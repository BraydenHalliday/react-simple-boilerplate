import React, {Component} from 'react';
import Message from './message.jsx';
import ChatBar from './ChatBar.jsx';
import Footer1 from './foot1.jsx';
import '../styles/application.scss';

//import ReactDOM from 'react-dom';

// main class
class App extends Component {
  render() {
   return (
     <div>
       <ChatBar />
   <h1>hello world</h1> 
    <Message />
   <Footer1 />
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