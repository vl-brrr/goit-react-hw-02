export const Options = ({ grades, onUpdate, onReset, totalFeedback }) => {
  const names = Object.keys(grades);

  return (
    <div>
      {names.map(name => {
        return (
          <button key={names.indexOf(name)} onClick={() => onUpdate(name)}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        );
      })}
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};
