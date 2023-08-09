import { Outlet } from "react-router-dom";
import RegisterContext from "./context/RegisterContext";

function App() {
  return (
    <RegisterContext>
      <Outlet/>
    </RegisterContext>
  );
}

export default App;
