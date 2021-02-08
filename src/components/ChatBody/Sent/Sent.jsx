import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Sent.css';

const Sent = (props) => {
    const [messagebox,setMessageBox] = useState(false);
    const [message,setMessage] = useState(props.message);

    const onMessageClicked = () => {
        setMessageBox(true);
    }

    const keyPressHandler = (event) => {
        if(event.key === 'Enter' && event.target.value && event.target.value.trim().length) {
            const msg = event.target.value.trim();
            var messages = {...message,msg};
            setMessage(messages);
            setMessageBox(false);
        }
    };

    const onBlurInput = () => {
        setMessageBox(false);
    }

   return (
    <div>
   <div className="sent msg" onClick={onMessageClicked}>
        {message.msg}
    </div>
    {messagebox && <input type="text" className="form-control" id="inputbox" defaultValue={message.msg} autoFocus={true}
    onKeyPress={keyPressHandler} onBlur={onBlurInput}/>}
    </div>)
};

export default Sent;

Sent.propTypes = {
    message: PropTypes.object
}