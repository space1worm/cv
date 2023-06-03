import { BrowserRouter, Route, Routes } from "react-router-dom";

import Experience from "@pages/Experience";
import Home from "@pages/Home";
import Other from "@pages/Other";
import Skills from "@pages/Skills";

import Nav from "@components/nav/Nav.component";

const Pages = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/skills",
    element: <Skills />
  },
  {
    path: "/experience",
    element: <Experience />
  },
  {
    path: "/other",
    element: <Other />
  }
];

export default function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {Pages.map((page, idx) => (
            <Route key={idx + Math.random()} {...page} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}
