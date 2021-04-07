import React from 'react'
import { useTheme } from '../../Hooks'

import './styles.css'

export const Rating = () => {
  const { theme } = useTheme()

  return (
    <div className="chatUser user">
      <div
        style={{
          color: theme.colors.messageUserText,
          backgroundColor: theme.colors.messageUserBackground,
        }}
        className="chat-message-user"
      >
        <div className="rating-center">
          <div className="rating">
            <label>
              <input type="radio" name="stars" value="1" />
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="2" />
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="3" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="4" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="5" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
