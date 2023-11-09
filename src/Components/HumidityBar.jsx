

const HumidityBar = ({humidity})=> {
  return (
    <>
    
    <div className="humidity-bar">
      <span className="percentage-value">0</span>
      <span className="percentage-value">50</span>
      <span className="percentage-value">100</span>
    </div>
      <div className="fill" style={{ width: `${humidity}%` }}></div>
    </>
  );
}

export default HumidityBar;
    