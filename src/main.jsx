import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme-provider.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
