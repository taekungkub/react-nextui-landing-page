import "./index.css"
import { Providers } from "./context/providers"
import TheNavbar from "./layouts/Navbar"
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
import Signin from "./views/Auth/Signin"
import Home from "./views/Home"
import { Toaster } from "react-hot-toast"
import TestPage from "./views/Home/test"

function Root() {
  return (
    <>
      <Providers>
        <Toaster />
        <TheNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signin />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
        </Routes>
      </Providers>
    </>
  )
}

const router = createBrowserRouter([{ path: "*", Component: Root }])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
