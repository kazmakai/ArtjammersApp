import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Friends from "./pages/friends/Friends";
import Notifications from "./pages/notification/Notifications";
import Profile from "./pages/profile/Profile";
import './App.css';


function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/friends" element={<Friends />}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  )
}

export default App;
