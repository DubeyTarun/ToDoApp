import styles from "./Checkbox.module.css";

const Checkbox = ({ selected, option, onChange }) => {
  return (
    <label className={styles.label} key={option}>
      <input
        type="checkbox"
        checked={selected.includes(option)}
        onChange={onChange.bind(null, option)}
      />
      {option}
    </label>
  );
};

export default Checkbox;
