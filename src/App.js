import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from "./Pages/home/Home";
import { Layout } from "./Components/layout/Layout";
import { ContactUs } from "./Pages/contact-us/ContactUs";

export const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/contact-us" element={<ContactUs />} exact />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
