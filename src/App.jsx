import React, { useEffect, useState } from "react";
import InfoBar from "./components/InfoBar";
import MapDisplay from "./components/MapDisplay";
import { fetchIPInfo } from "./utils/api";
import "./styles.css";

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

  return (
    <div className="app">
      <header className="header">
        <h1 className="tracker-heading">IP Address Tracker</h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">&#10140;</button>
        </form>
      </header>

      {ipData && (
        <>
          <InfoBar
            ip={ipData.ip}
            location={`${ipData.location.city}, ${ipData.location.country}`}
            timezone={`UTC ${ipData.location.timezone}`}
            isp={ipData.isp}
          />
          <MapDisplay lat={ipData.location.lat} lng={ipData.location.lng} />
        </>
      )}

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Ammar Daud Khan</a>.
      </div>
    </div>
  );
}

export default App;