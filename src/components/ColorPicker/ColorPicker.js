import styles from './ColorPicker.module.css';

function ColorPicker({ options }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <div>
        {options.map(option => (
          <span
            className={styles.option}
            style={{ backgroundColor: option.color }}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
