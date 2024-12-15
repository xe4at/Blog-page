import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Index";
import BlogPage from "./components/blog/BlogPage";
import AuthorsPage from "./components/author/AuthorsPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorsPage />} />
        </Routes>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
