import React from 'react'
import { useTheme } from '../../../Hooks'

import './styles.css'

const ChatBot = (props) => {
  const { theme } = useTheme()

  return (
    <div className="chat bot">
      <p
        className="chat-message"
        style={{
          color: theme.colors.messageBotText,
          backgroundColor: theme.colors.messageBotBackground,
        }}
      >
        {props.message}
      </p>
    </div>
  )
}

export default ChatBot
