const Result = ({ redirectToDeal }) => {
  return (
    <div className="result">
      <h2>Job is created</h2>
      <p onClick={redirectToDeal}>View Deal</p>
    </div>
  );
};

export default Result;
