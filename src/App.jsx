import NavBar  from "./Todo/NavBar"
import ViewTodo from "./Todo/ViewTodo"
import AddTodo from "./Todo/addTodo"


function App() {

  return (
    <>
    <NavBar/>
    <div className="flex gap-2">

    <div className="w-full">
       <AddTodo />
    </div>

    <div className="w-full">
      <ViewTodo />
    </div>
    </div>
    
    </>
  )
}

export default App