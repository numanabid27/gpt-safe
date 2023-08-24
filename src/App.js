import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import { Home } from "./Pages/home/Home";
import { Layout } from "./Components/layout/Layout";
import { ContactUs } from "./Pages/contact-us/ContactUs";
import { Blog } from "./Pages/blog/Blog";
import { BlogDetail } from "./Pages/blog/[BlogDetail]";

export const App = () => {
  const params = useParams();
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/contact-us" element={<ContactUs />} exact />
            <Route path="/blog" element={<Blog />} exact />
            <Route path="/blog/:id" element={<BlogDetail />} exact />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
