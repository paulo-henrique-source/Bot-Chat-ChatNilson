import ThemeProvider from './Hooks'
import Routes from './Routes/index.js'

const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}

export default App
