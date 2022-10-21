import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import "./app/index.scss";
import { Router } from "./Router";

/**
 * Render the React App
 */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
