# Frontend Mentor - IP address tracker solution
🛰️ IP Address Tracker

IP Address Tracker is a responsive web application built with **React**, **Vite**, and **Leaflet.js**, enabling users to look up any IP address or domain and view its geographical location on an interactive map. This project integrates third-party IP Geolocation APIs and emphasizes accessibility, clean design, and seamless user experience. Styled with custom CSS and enhanced with visual layout improvements, the app is optimized for modern devices and provides real-time geolocation insights in a friendly interface.
## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![IP Tracker Screenshot](./public/IP%20tracker%20React.png)

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Live Site URL: [Live Project](http://localhost:5173/)

### Built with

- **React** – Frontend UI library
- **Vite** – Development server and bundler
- **Leaflet.js** – Interactive map rendering
- **IP Geolocation API** – (e.g. IPify, IP Geolocation.io)
- **CSS (custom)** – Styling and layout

### What I learned
How to use API keys in code and how to use them and hanling the errors while using the .env & getting the loccation and ip address that HOW TO TACKLE FROM THEM AND MAKE IT MORE ACCESSIVE 


```APP.jsx
    function App() {
  const [ipData, setIpData] = useState(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!input.trim()) return alert("Please enter a valid IP address or domain");

    try {
      const data = await fetchIPInfo(input.trim());
      setIpData(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch IP info.");
    }
  };

  useEffect(() => {
    fetchIPInfo().then(setIpData).catch(console.error);
  }, []);
    }
```
```css
.header {
 background-image: url('/ip-tracker/public/pattern-bg-desktop.png');
  color: rgb(233, 228, 228);
  padding: 5rem;
  text-align: center;
}
```  

          **Continued development**
1. Adding animations or transitions to sections for a more dynamic experience
2. Improved Error Handling
3. Dark Mode Toggle
4. Accessibility Improvements

           **Useful resources**
1. Leaflet.js Documentation
2. MDN Web Docs – Fetch API
3. IPify API – IP Geolocation
4. Greek for Greeks
 
             **Author**
Name : Ammar Daud Khan
GitHub: https://github.com/AmmarDaud

