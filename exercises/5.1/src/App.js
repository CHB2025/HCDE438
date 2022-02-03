import './App.css';
import Message from './Components/Message';
import { useState } from "react";
import { TextInput } from './Components/TextInput';
import Camera from 'react-snap-pic';

function App() {
   const [showCamera, setShowCamera] = useState(false);
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
   const sendMessage = (message) => {
      setMessages((prev) => {
         return [
            {
               type: 'sent',
               message: message
            },
            ...prev,
         ]
      })
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

   const takePicture = (pic) => {
      console.log(pic)
      setShowCamera(false)
   }

   return (
      <div className="App">
         {showCamera ? <Camera takePicture={takePicture}/> : null}
         <div className="header">
            <div className="logo"/>
            <h1 className="title">Chatter</h1>
         </div>
         <div className="message-list">
            {
               (groupMessages(messages)).map((m, index) => <Message messages={m.reverse()} type={m[0].type} key={index}/>)
            }
         </div>
         <TextInput sendMessage={sendMessage} showCamera={() => setShowCamera(true)}/>
      </div>
   );
}

export default App;
