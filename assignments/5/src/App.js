import './App.css';
import Message from './Components/Message';
import { useState } from "react";
import { TextInput } from './Components/TextInput';
import Camera from 'react-snap-pic';
import NamePicker from './Components/NamePicker';

function App() {
   const [showCamera, setShowCamera] = useState(false);
   const [name, setName ] = useState('');
   const [messages, setMessages] = useState([]);
   const sendMessage = (message) => {
      if(name.trim().length < 1) {
         throw new Error('You must set a username before sending a message')
      }
      setMessages((prev) => {
         return [
            {
               message: message,
               from: name
            },
            ...prev,
         ]
      })
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
            <div className="flex-spacer"/>
            <NamePicker name={name} setName={setName}/>
         </div>
         <div className="message-list">
            {
               messages.map((m, index) => <Message message={m.message} type={m.from === name ? 'sent' : 'received'} from={m.from} key={index}/>)
            }
         </div>
         <TextInput sendMessage={sendMessage} showCamera={() => setShowCamera(true)}/>
      </div>
   );
}

export default App;
