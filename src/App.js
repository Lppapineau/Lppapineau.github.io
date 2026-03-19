/* import logo from './logo.png';
import Home from "./pages/Home"
import Partner from "./pages/Partner"
import Free from "./pages/Free"
import Error from "./pages/Error"
import Blog from "./pages/Blog"
import { ProviderBlogArticle } from './components';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom" */

import Home from "./pages/Home"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Free from "./pages/Free"
import Error from "./pages/Error"
import Blog from "./pages/Blog"
import { ProviderBlogArticle } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/Free" element={<Free />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route path="provider" element={<ProviderBlogArticle />} />
      </Routes >
    </Router>
  );
}

export default App;