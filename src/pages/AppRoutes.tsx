import { Route, Routes } from "react-router-dom";
import { MainNav } from "../component";
import {
  HandDrawPage,
  HomePage,
  ToDoListPage,
} from "./";
function AppRoutes() {
  return (
    <div>
      {/* <MainNav /> */}
      <Routes>
        <Route path='/todo' element={<ToDoListPage />} />
        <Route path='/draw' element={<HandDrawPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default AppRoutes