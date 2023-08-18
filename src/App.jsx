import './App.css'
import Todos from './components/Todos'
import AddTodos from './components/AddTodos'

function App() {

  return (
    <>
      <div className='flex flex-col justify-start items-center h-screen bg-gray-600 gap-10'>
        <AddTodos />
        <Todos />
      </div>
    </>
  )
}

export default App
