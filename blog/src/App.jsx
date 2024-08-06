
import BlogContainer from "./components/BlogContainer"
import BlogHeading from "./components/BlogHeading"
import Jumbotron from "./components/Jumbotron"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import {Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import AddBlogPage from "./pages/AddBlogPage"
import PageNotFound from "./pages/PageNotFound"
import DetailPage from "./pages/DetailPage"

const App = () => {
  return(
    <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="add-blog" element={<AddBlogPage />} />
      <Route path="/blogs/slug" element={<DetailPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Route>
  </Routes>
  )
}

export default App