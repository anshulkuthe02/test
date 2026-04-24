import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import tuxFavicon from "./assets/tux-penguin.png";

// set favicon dynamically so bundled asset is used (works with Vite)
try {
	const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.setAttribute('rel', 'icon');
	link.setAttribute('type', 'image/png');
	link.setAttribute('href', tuxFavicon);
	if (!document.querySelector("link[rel*='icon']")) document.head.appendChild(link);
} catch (e) {
	// ignore in non-browser environments
}

createRoot(document.getElementById("root")!).render(<App />);
