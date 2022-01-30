import './App.css';
import Message from './Components/Message';
import { useState } from "react";

function App() {
   const [messages, setMessages] = useState([
      {
         type: 'received',
         message: 'Hello there!'
      },
      {
         type: 'sent',
         message: 'Hi, how are you?'
      }
   ])
   const [currentText, setCurrentText] = useState('');

   const sendMessage = (e) => {
      e.preventDefault();
      if(currentText.length > 0){
         setMessages((prev) => {
            return [
               {
                  type: 'sent',
                  message: currentText
               },
               ...prev,
            ]
         })
         setCurrentText('')
      }
   }

   const groupMessages = (msgs) => {
      const response = [];
      let curr = [];
      let currType = '';
      msgs.forEach((msg) => {
         if(msg.type !== currType) {
            if(curr.length > 0) {
               response.push(curr);
               curr = [];
            }
            currType = msg.type
         }
         curr.push(msg)
      })
      return response;
   }

   return (
      <div className="App">
         <div className="header">
            <div className="logo"/>
            <h1 className="title">Chatter</h1>
         </div>
         <div className="message-list">
            {
               (groupMessages(messages)).map((m, index) => <Message messages={m.reverse()} type={m[0].type} key={index}/>)
            }
         </div>
         <div className="input-bar">
            <form onSubmit={sendMessage}>
               <input 
                  className="text-input"
                  type="text"
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  minLength={1}
               />
               <button className="submit" type="submit">&#x2191;</button>
            </form>
         </div>
      </div>
   );
}

export default App;
