import React, {Component} from 'react';
import '../styles/application.scss';
class App extends Component {
  render() {
    return (

      <html>
      <head>
        <meta charSet='utf-8'></meta>
        <title>Chatty</title>
  
      </head>
      <body>
      <nav className='navbar'>
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <main className='messages'>
        <div className="message">
          <span classNames="message-username">Anonymous1</span>
          <span className="message-content">I won't be impressed with technology until I can download food.</span>
        </div>
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </main>
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
      </body>
      </html>

    );
  }
}
export default App;
