import './Message.css';

export const Message = ({
   message,
   type,
   from
}) => {
   return (
      <div className={`message-container ${type === 'received' ? 'received' : 'sent'}`} >
         <span className="from">{from}</span>
         <span className="message">{message}</span>
      </div>
   )
}

export default Message;