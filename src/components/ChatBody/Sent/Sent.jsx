import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Sent.css';

const Sent = ({ message }) => {
    const [messagebox,setMessageBox] = useState(false);
    const onMessageClicked = () => {
        console.log("clicked ",message);
        setMessageBox(true);
    }

    const onInputHandler=(e)=>{
        console.log("clicked ",e.target.value);
    }
   return (
    <div>
   <div className="sent msg" onClick={onMessageClicked}>
        {message.msg}
    </div>
    {messagebox && <input type="text" value={message.msg} onChange={onInputHandler}/>}
    </div>)
};

export default Sent;

Sent.propTypes = {
    message: PropTypes.object
}