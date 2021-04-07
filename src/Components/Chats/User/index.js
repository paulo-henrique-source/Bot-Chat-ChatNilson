import React from 'react'
import { ErrorMessage, useField } from 'formik'
import { useTheme } from '../../../Hooks'
import './styles.css'

export const BotUser = ({ children, ...props }) => {
  const { theme } = useTheme()
  const [field] = useField(props)
  return (
    <div className="chatUser user">
      <div
        className="chat-message-user"
        style={{
          color: theme.colors.messageUserText,
          backgroundColor: theme.colors.messageUserBackground,
        }}
      >
        <div className="chat-grid">
          <div>
            <input
              className={`input-user`}
              {...field}
              {...props}
              placeholder={props.placeholder}
              max={props.max}
            />
          </div>
          <div className="invite-div">{children}</div>
          <div>
            <ErrorMessage component="div" name={field.name} className="error" />
          </div>
        </div>
      </div>
    </div>
  )
}
