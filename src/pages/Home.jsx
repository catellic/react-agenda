import TaskColumn from '../components/TaskColumn.jsx'


function Home() {

  return (
    <div className="home flex flex-col items-between min-h-screen min-w-screen bg-gray-800">
      <header className="header text-3xl font-bold bg-blue-500 text-white mb-8 p-6 text-center">
        <h1>The Great Agenda</h1>
      </header>
      <main className="columns flex flex-col md:flex-row gap-8 justify-center items-start ">
        <TaskColumn column='todo' className='flex-1'/>
        <TaskColumn column='doing' className='flex-1'/>
        <TaskColumn column='done' className='flex-1'/>
      </main>
      
      <footer className="footer bg-blue-500 text-white mt-8 p-4 text-center mt-auto">
        <h1 className='text-xl'>Just a footer!</h1>
        <h1 className='text-xs'>by <a href='https://github.com/catellic/react-agenda' target="_blank">catellic @ GitHub</a> </h1>
      </footer>
    </div>
  )
}

export default Home