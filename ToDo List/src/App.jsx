import './index.css'

function App() {
  return (
  <>
  <main className="flex flex-col gap-[20px] items-center mt-[50px]">
    <h1 className="text-white text-[30px] font-bold mt-10">Chores ToDo List</h1>
    <div className="container flex flex-col w-[500px]">
      <div className="todolist">
        <ul className="flex flex-col gap-2">

          <li className="flex justify-between items-center">
            <div className="checkbox flex items-center ">          
              <input type="checkbox" className="form-checkbox bg-custom-green"/>
              <span className="text-white ml-6 ">Create Guest Experience Mobile Check-in</span>
            </div>           
            <div class="trash flex ">                 
                <button className="border-2 border-custom-pink p-1 items-center w-9 h-9 pt-[5px] rounded"><span class="material-icons-outlined text-custom-pink ">delete</span></button>
            </div>
          </li>

          <li className="flex justify-between items-center">
            <div className="checkbox flex items-center">              
              <input type="checkbox" className="bg-custom-green outline-outline-green"/>             
              <span className="text-white ml-6">Document current CI/CD process</span>
            </div>           
            <div class="trash ml-10 flex items-center">                 
                <button className="border-2 border-custom-pink p-1 items-center w-9 h-9 pt-[5px] rounded"><span class="material-icons-outlined text-custom-pink">delete</span></button>
            </div>
          </li>

          <li className="flex justify-between items-center">
            <div className="checkbox flex items-center">              
              <input type="checkbox" className="bg-custom-green outline-outline-custom-green"/>             
              <span className="text-white ml-6">Perform Code Review for Final Pillow-Talk release</span>
            </div>           
            <div class="trash ml-10 flex items-center">                 
                <button className="border-2 border-custom-pink p-1 items-center w-9 h-9 pt-[5px] rounded"><span class="material-icons-outlined text-custom-pink">delete</span></button>
            </div>
          </li>

          <li className="flex justify-between items-center">
            <div className="checkbox flex items-center">              
              <input type="checkbox" className="bg-custom-green outline-outline-green"/>             
              <span className="text-white ml-6">New Color Pallete from Design Team</span>
            </div>           
            <div class="trash ml-10 flex items-center">                 
                <button className="border-2 border-custom-pink p-1 items-center w-9 h-9 pt-[5px] rounded"><span class="material-icons-outlined text-custom-pink">delete</span></button>
            </div>
          </li>

          <li className="flex justify-between items-center">
            <div className="checkbox flex items-center">              
              <input type="checkbox" className="bg-custom-green outline-outline-green"/>             
              <span className="text-white ml-6">Fix image uploading process for guest check-in</span>
            </div>           
            <div class="trash ml-10 flex items-center">                 
                <button className="border-2 border-custom-pink p-1 items-center w-9 h-9 pt-[5px] rounded"><span class="material-icons-outlined text-custom-pink">delete</span></button>
            </div>
          </li>

          <li className="flex justify-between items-center">
            <div className="checkbox flex items-center">              
              <input type="checkbox" className="bg-custom-green outline-outline-green"/>             
              <span className="text-white ml-6 ">Provide on boarding documentation</span>
            </div>           
            <div class="trash ml-10 flex items-center">                 
                <button className="border-2 border-custom-pink p-1 items-center w-9 h-9 pt-[5px] rounded"><span class="material-icons-outlined text-custom-pink">delete</span></button>
            </div>
          </li>

        </ul>
        </div>
      </div>
    <hr className="mt-5 w-full"></hr>
    <div class="counter w-[500px] flex flex-col gap-[20px]">
      <h2 className="text-center text-white text-[20px] font-bold mt-3">Done : 0</h2>
      <p className="text-white">Add todo</p>
      <input type="text" className="w-full flex-col h-[50px] rounded-10 bg-custom-green border border-white border-solid"/>
      <button className="flex bg-custom-blue w-fit rounded p-1 pl-2 pr-2 font-bold">Add Task</button>
      </div>
      
   
  </main>
  
  </>  
  )
}

export default App
