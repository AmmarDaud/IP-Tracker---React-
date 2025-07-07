
const InfoBar = ({ ip, location, timezone, isp }) => {
  return (
    <div className="info-panel">
      <div className="info-block">
        <h2>IP Address</h2>
        <p>{ip || "Loading..."}</p>
      </div>
      <div className="info-block">
        <h2>Location</h2>
        <p>{location || "Loading..."}</p>
      </div>
      <div className="info-block">
        <h2>Timezone</h2>
        <p>{timezone || "Loading..."}</p>
      </div>
      <div className="info-block">
        <h2>ISP</h2>
        <p>{isp || "Loading..."}</p>
      </div>
    </div>
  );
};

export default InfoBar;