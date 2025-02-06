import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Contact from './components/contact';
import About from "./components/about/about";
import Categories from "./components/mainmenu/categories";
import Dessert from "./components/mainmenu/dessert";
import Sides from "./components/mainmenu/sides";
import Burgers from "./components/mainmenu/burgers";
import Blog from "./components/blogs/blog";
import Blogposts from "./components/blogs/blogposts";
import Menu from "./components/menu";
import Menudetail from "./components/mainmenu/menudetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/sides" element={<Sides />} />
        <Route path="/burgers" element={<Burgers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-posts/:id" element={<Blogposts />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu-detail/:id" element={<Menudetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
