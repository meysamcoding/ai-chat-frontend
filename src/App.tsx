

import './App.css'
import Chat from './components/chat'
import Login from './components/login'

function App() {

  return (
     <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl text-center font-bold pt-6">AI Chat App</h1>
      <Login />
       <Chat />
    </div>
  )
}

export default App
