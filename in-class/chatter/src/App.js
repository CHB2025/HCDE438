import './App.css';
import './Message.css'
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

   return (
      <div className="App">
         <div className="header">
            <div className="logo"/>
            <h1 className="title">Chatter</h1>
         </div>
         <div className="message-list">
            {
               messages.map((m, index) => {
                  switch (m.type) {
                     case 'sent':
                        return (
                           <div className='message-container sent' key={index}>
                              <span className="message">{m.message}</span>
                           </div>
                        )
                     case 'received':
                        return (
                           <div className="message-container received" key={index}>
                              <span className="message">{m.message}</span>
                           </div>
                        )
                     default:
                        return null
                  }
               })
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
