import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
          <Link to="/">
            <img
              src={logo}
              alt="Your Site Logo"
              className="w-28 object-contain"
            />
          </Link>
          <Link
            to="/createPost"
            className="font-inter font-medium bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
        </header>
        <main className="sm:p-8 px-4 py-8 w-full bg-white min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createPost" element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
