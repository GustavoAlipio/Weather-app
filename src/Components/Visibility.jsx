/* eslint-disable react/prop-types */
const Visibility = ({ visibility }) => {
  return (
    <div className="Visibility">
      <p>Visibility</p>
      <span className="info">{(visibility*0.000621371).toFixed(1)}</span>
      <span>miles</span>
    </div>
  );
};

export default Visibility;
