const Air = ({ airPressure }) => {
  return (
    <div className="Air">
      <p>Air Pressure</p>
      <span className="info">{airPressure}</span> <span>mb</span>
    </div>
  );
};

export default Air;
