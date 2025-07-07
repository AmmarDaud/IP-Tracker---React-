import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapDisplay = ({ lat, lng }) => {
  useEffect(() => {
    const map = L.map("map").setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([lat, lng]).addTo(map);

    return () => map.remove();
  }, [lat, lng]);

  return <div id="map" style={{ height: "600px" }}></div>;
};

export default MapDisplay;