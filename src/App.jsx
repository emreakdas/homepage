import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Tools from "./pages/Tools";
import Layout from "./layout/Index";
import { HelmetProvider } from 'react-helmet-async';

function App() {  
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index={true} element={<Home />} />
              <Route path="tools" element={<Tools />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
