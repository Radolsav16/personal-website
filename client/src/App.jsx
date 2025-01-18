import { Route , Routes } from "react-router-dom"
import Header from "./components/header/header"
import Contact from "./components/contact/Contact"
import Main from "./components/main/Main"

function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/contact" element={<Contact />}/>\
        </Routes>
      </main>
    
    </>
  )
}

export default App
