import TaskColumn from '../components/TaskColumn.jsx'


function Home() {

  return (
    <div className='home flex-vertical text-center'>
      <header className='header'>
        <h1>My great agenda!</h1>
      </header>
      <main className="columns flex  justify-center items-start">
        <TaskColumn column='todo' />
        <TaskColumn column='doing' />
        <TaskColumn column='done' />
      </main>
      
      <footer className='footer'>
        <h1>Just a footer</h1>
      </footer>
    </div>
  )
}

export default Home