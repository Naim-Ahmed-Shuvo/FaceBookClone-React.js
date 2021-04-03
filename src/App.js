import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Widgets from "./Components/Widgets";
import {useStateValue} from './StateProvider';
import Login from './Components/Login';
function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="app">
      {!user? <Login/>:(
        <>
         <Header />
         <div className="app__body">
           <SideBar />
           <Feed />
           <Widgets />
         </div>
         </>
         
      )}
    </div>
  );
}

export default App;
