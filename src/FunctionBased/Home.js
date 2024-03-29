import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import Search from "./Search";
//import NavigationBar from './Navbar';
import { NavigationBar } from './Navbartrial';
import Footer from "./Footer";

export default function Home() {
    return (
      <div>
        <NavigationBar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }