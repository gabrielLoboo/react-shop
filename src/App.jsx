import { Outlet } from "react-router-dom";
import './App.css'
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  )
}
