import React from "react";

const ServiceLocation = ({ formData, handleChange }) => {
  return (
    <div className="frames__item">
      <span>Service location</span>
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        name="address"
        required={true}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        name="city"
        required={true}
      />
      <input
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        name="state"
        required={true}
      />
      <div className="divideByTwo">
        <input
          type="text"
          placeholder="Zip code"
          value={formData.zipcode}
          onChange={handleChange}
          name="zipcode"
          required={true}
        />
        <select
          value={formData.area}
          onChange={handleChange}
          name="area"
          required={true}
        >
          <option value="" disabled selected>
            Area
          </option>
          <option value="option1">Вариант 1</option>
          <option value="option2">Вариант 2</option>
          <option value="option3">Вариант 3</option>
        </select>
      </div>
    </div>
  );
};

export default ServiceLocation;
