import Sidebar from './components/sidebar/Sidebar'
import MainContent from './components/main_content/MainContent'

// TODO: NTH: Dark mode
function App() {
  return (
    <div className="h-lvh w-lvw bg-[50%] bg-cover overflow-x-hidden overflow-y-auto no-scrollbar bg-gradient-to-r from-cyan-100 to-blue-400">
      <div className="container">
        <div className="row flex-wrap">
          <div className='grid-flow-col sm:grid sm:grid-cols-2  md:relative'>
            <div className="mt-[10vw] mx-5 sm:mx-10">
              <Sidebar />
            </div>
            <div className="mx-5 sm:mx-10">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
