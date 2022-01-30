import './Message.css';

export const Message = ({
   messages, //Group of messages
   type
}) => {
   return (
      <div className={`message-container ${type === 'received' ? 'received' : 'sent'}`} >
         {
            messages.map((msg, index) => {
               return <span className="message" key={index}>{msg.message}</span>
            })
         }
      </div>
   )
}

export default Message;