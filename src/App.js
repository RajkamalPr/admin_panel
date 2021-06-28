import './App.css'
import Navigationbar from './Components/Navigationbar/Navigationbar'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <div className='App'>
      <Navigationbar />
      <div className='main'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
