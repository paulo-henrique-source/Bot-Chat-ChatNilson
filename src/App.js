import './App.css'
import UserProvider from './Hooks'
import Routes from './Routes/index.js'

const App = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  )
}

export default App
