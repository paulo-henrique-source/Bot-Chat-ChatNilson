import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export const themes = [
  {
    name: 'dark',
    colors: {
      background: '#1e1d23',
      text: 'grey',
      messageBotText: 'white',
      messageUserText: 'white',
      messageBotBackground: '#47484b',
      messageUserBackground: '#71E1EC',
      dangerColor: '#DC3545',
      stars: '#fff',
    },
  },
  {
    name: 'white',
    colors: {
      background: '#f0f0f0',
      text: '#47484b',
      messageBotText: 'black',
      messageUserText: 'black',
      messageBackground: 'white',
      messageBotBackground: '#E4E6E9',
      messageUserBackground: '#71E1EC',
      dangerColor: '#DC3545',
      stars: '#000',
    },
  },
]

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes[1])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  const { theme, setTheme } = context
  return { theme, setTheme }
}
