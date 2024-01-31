import {
  ClientDetails,
  JobDetails,
  ServiceLocation,
  Scheduled,
} from "./components";

const Form = ({ handleChange, handleSumbit, formData, isLoading }) => {
  return (
    <div className="container">
      <form onSubmit={handleSumbit} className="frames__form">
        <div className="frames__container">
          <ClientDetails handleChange={handleChange} formData={formData} />
          <JobDetails handleChange={handleChange} formData={formData} />
          <ServiceLocation handleChange={handleChange} formData={formData} />
          <Scheduled handleChange={handleChange} formData={formData} />
        </div>

        <div className="frames__buttons">
          <button
            disabled={isLoading}
            type="submit"
            style={{
              backgroundColor: isLoading ? "red" : "yellow",
              cursor: "pointer",
            }}
          >
            {isLoading ? "Request is sent" : "Create job"}
          </button>
          <button style={{ backgroundColor: "#ccc", cursor: "pointer" }}>
            Save info
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
