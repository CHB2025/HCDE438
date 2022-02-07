import { useState } from "react";
import "./NamePicker.css"

export const NamePicker = ({
   name,
   setName
}) => {
   const [editName, setEditName] = useState(false);
   return (
      <div className="name-picker">
         {editName ? 
            <input className="np-input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
         :
            name.length > 0 ? name : 'Set Username'
         }
         <button className="np" onClick={(e) => setEditName(!editName)}>{editName ? "Ok" : 'Edit'}</button>
      </div>
   )
}

export default NamePicker;