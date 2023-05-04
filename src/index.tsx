import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Editor } from "./pages/editor";
import { History } from "./pages/history";

const GlobalStyle = createGlobalStyle`
body * {
    box-sizing: border-box;
}
`;

const Main = (
  <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/editor" element={<Editor />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Navigate to="/editor" replace />} />
      </Routes>
    </Router>
  </>
);

render(Main, document.getElementById("app"));
