import React from 'react'
import BootIcon from '../../Assets/BootIcon.gif'
import { useTheme, themes } from '../../Hooks'
import './styles.css'

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div>
          <img className="bot-photo" src={BootIcon} alt="Carregando..." />
        </div>
        <div>
          <div
            className="bot-name"
            style={{
              color: theme.colors.text,
            }}
          >
            Chatnilson
          </div>
        </div>
        <div>
          <div className="container">
            <input
              type="checkbox"
              name="theme"
              id="switch"
              className="themeInput"
              onClick={() => {
                setTheme(theme.name === 'dark' ? themes[1] : themes[0])
              }}
            />
            <label className="themeLabel" htmlFor="switch">
              Toggle
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
