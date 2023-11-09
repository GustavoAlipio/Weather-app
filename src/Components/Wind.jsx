/* eslint-disable react/prop-types */
const Wind = ({ windStatus }) => {
  return (
    <div className="Wind">
      <p>Wind status</p>
      <span className="info">{windStatus.toFixed(0)}</span><span>mph</span>
    </div>
  );
};

export default Wind;
