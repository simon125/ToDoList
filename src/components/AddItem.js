const AddItem = ({ value, onChange, onSubmit, onClickEnter }) => {
  return (
    <div>
      <input
        type="text"
        onKeyPress={(e) => onClickEnter(e)}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <input type="submit" value="Dodaj" onClick={() => onSubmit()} />
    </div>
  );
};

export default AddItem;
