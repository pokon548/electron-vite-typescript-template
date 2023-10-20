import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import SimpleBar from "simplebar-react";

import "./styles/tailwind.css";
import "simplebar-react/dist/simplebar.min.css";
import "./styles/scrollbar.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SimpleBar className="max-h-screen max-w-screen">
      <App />
    </SimpleBar>
  </React.StrictMode>
);
