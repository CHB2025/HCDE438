import { useState } from 'react';
import { FiCamera, FiSend } from 'react-icons/fi';
import './TextInput.css';

export const TextInput = ({ sendMessage, showCamera }) => {
   const [ currentText, setCurrentText ] = useState('')
   
   const send = (e) => {
      e.preventDefault();
      if(currentText.length > 0){
         sendMessage(currentText)
         setCurrentText('')
      }
   }
   return (
      <div className="input-bar">
         <form className="input-form" onSubmit={send}>
            <button onClick={(e) => {e.preventDefault(); showCamera()}}><FiCamera/></button>
            <input 
               className="text-input"
               type="text"
               value={currentText}
               onChange={(e) => setCurrentText(e.target.value)}
               minLength={1}
            />
            <button className="submit" type="submit"><FiSend/></button>
         </form>
      </div>
   )
}