import TaskColumn from '../components/TaskColumn.jsx'


function Home() {

  return (
    <div className="home flex flex-col min-h-screen">
      <header className="header p-4 text-center">
        <h1>My great agenda!</h1>
      </header>
      <main className="columns flex flex-col md:flex-row gap-8 justify-center items-start">
        <TaskColumn column='todo' className='flex-1'/>
        <TaskColumn column='doing' className='flex-1'/>
        <TaskColumn column='done' className='flex-1'/>
      </main>
      
      <footer className="footer p-4 text-center mt-auto">
        <h1>Just a footer</h1>
      </footer>
    </div>
  )
}

export default Home