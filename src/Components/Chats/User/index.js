import React from 'react'
import { ErrorMessage, useField } from 'formik'
import './styles.css'

export const BotUser = ({ children, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="chat user">
      <div className="chat-message-user">
        <div className="chat-grid">
          <div>
            <input
              className={`input-user ${
                meta.touched && meta.error && 'is-invalid'
              }`}
              {...field}
              {...props}
              autoComplete="off"
              placeholder={props.placeholder}
            />
            <ErrorMessage component="div" name={field.name} className="error" />
          </div>
          <div className="invite-div">{children}</div>
        </div>
      </div>
      <span className="tooltip"></span>
    </div>
  )
}
