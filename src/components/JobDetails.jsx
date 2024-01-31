const JobDetails = ({ formData, handleChange }) => {
  return (
    <div className="frames__item">
      <span>Job details</span>
      <div className="divideByTwo">
        <select
          value={formData.jobType}
          onChange={handleChange}
          name="jobType"
          required={true}
        >
          <option value="" disabled selected>
            Job type
          </option>
          <option value="option1">Вариант 1</option>
          <option value="option2">Вариант 2</option>
          <option value="option3">Вариант 3</option>
        </select>
        <select
          value={formData.jobSource}
          onChange={handleChange}
          name="jobSource"
          required={true}
        >
          <option value="" disabled selected>
            Job source
          </option>
          <option value="option1">Вариант 1</option>
          <option value="option2">Вариант 2</option>
          <option value="option3">Вариант 3</option>
        </select>
      </div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Job description (optional)"
        value={formData.jobDesc}
        onChange={handleChange}
        name="jobDesc"
      ></textarea>
    </div>
  );
};

export default JobDetails;
