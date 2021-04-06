import React from 'react'
import './styles.css'

const ChatBot = (props) => {
  return (
    <div className="chat bot">
      <div className="bot-photo">
        <img src={props.src} alt="Loading..." />
      </div>
      <p className="chat-message">{props.message}</p>
      <span className="tooltip-bot"></span>
    </div>
  )
}

export default ChatBot
