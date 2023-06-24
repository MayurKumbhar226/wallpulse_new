import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import { About } from "./pages/About/About"
import { Background } from "./pages/Background/Background"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/about" element={<About/>}/>
          
          <Route path="/background" element={<Background/>}/>





          <Route path="/login" element={<Login/>}></Route>


          <Route path="/register" element={<Regsiter/>}></Route>



          <Route path="/details/:id" element={<DetailsPages/>}></Route>



          <Route path="/account" element={<Account/>}></Route>



          <Route path="/create" element={<Create/>}></Route>



        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
