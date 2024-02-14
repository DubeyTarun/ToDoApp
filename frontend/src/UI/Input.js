import styles from "./Input.module.css";

const Input = ({ label, type, value, onChange, placeholder }) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        id={label}
        name={label}
        type={type ? type : "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={label}
      />
    </label>
  );
};

export default Input;
