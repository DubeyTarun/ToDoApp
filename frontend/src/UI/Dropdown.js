import styles from "./Dropdown.module.css";

const Dropdown = ({ question, value, options, defaultOption, onChange }) => {
  return (
    <label className={styles.label}>
      {question}
      <select value={value} onChange={onChange}>
        {value === "" && (
          <option>{defaultOption ? defaultOption : "Please Select..."}</option>
        )}
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Dropdown;
