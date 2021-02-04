const AddItem = ({ value, onChange, onSubmit }) => {
  return (
    <form>
      <input type="text" value={value} onChange={(e) => onChange(e)} />
      <input type="submit" value="Dodaj" onClick={() => onSubmit()} />
    </form>
  );
};

export default AddItem;
