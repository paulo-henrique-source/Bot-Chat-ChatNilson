import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const [userName, setUserName] = useState('')

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useCount() {
  const context = useContext(UserContext)
  if (!context) throw new Error('useName must be used within a UserProvider')
  const { userName, setUserName } = context
  return { userName, setUserName }
}
