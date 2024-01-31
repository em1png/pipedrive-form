const ClientDetails = ({ formData, handleChange }) => {
  return (
    <div className="frames__item">
      <span>Client details</span>
      <div className="divideByTwo">
        <input
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
          type="text"
          placeholder="First name"
          required={true}
        />
        <input
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
          type="text"
          placeholder="Last name"
          required={true}
        />
      </div>
      <input
        value={formData.phone}
        onChange={handleChange}
        name="phone"
        type="number"
        placeholder="Phone"
        required={true}
      />
      <input
        value={formData.email}
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Email (optional)"
      />
    </div>
  );
};

export default ClientDetails;
