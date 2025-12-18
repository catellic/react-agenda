import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskProvider from '../src/contexts/TaskContext.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className="min-h-screen flex justify-center items-start">
      <Home />
    </div>
  );
}


export default App;