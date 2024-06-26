import { Button } from '@chakra-ui/react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage /> } />
        <Route path='/chat' element={<ChatPage /> } />
      </Routes>
    </>
  )
}

export default App
