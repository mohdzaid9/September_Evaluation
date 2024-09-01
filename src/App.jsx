import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './Redux/Store'
import { AuthProvider } from './context/AuthContext'
import QuizMain from './components/QuizMain'



function App() {


  return (
    <Provider store={store}>
      <AuthProvider>
      <div>
      <QuizMain/>
      </div>
      </AuthProvider>
      </Provider>
  )
}

export default App
