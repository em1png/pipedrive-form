const Scheduled = ({ formData, handleChange }) => {
  // Vars
  const timeArr = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
  ];

  return (
    <div className="frames__item">
      <span>Scheduled</span>
      <input
        type="date"
        placeholder="Выберите дату"
        value={formData.startDate}
        onChange={handleChange}
        name="startDate"
        required={true}
      />
      <div className="divideByTwo">
        <select
          value={formData.startTime}
          onChange={handleChange}
          name="startTime"
          required={true}
        >
          <option disabled selected>
            Start time
          </option>
          {timeArr.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          value={formData.endTime}
          onChange={handleChange}
          name="endTime"
          required={true}
        >
          <option disabled selected>
            Start time
          </option>
          {timeArr.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <select
        value={formData.technician}
        onChange={handleChange}
        name="technician"
        required={true}
      >
        <option value="" disabled selected>
          Select technician
        </option>
        <option value="option1">Вариант 1</option>
        <option value="option2">Вариант 2</option>
        <option value="option3">Вариант 3</option>
      </select>
    </div>
  );
};

export default Scheduled;
