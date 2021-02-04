const Item = ({ id, text, onClick }) => {
  return (
    <>
      <li key={id}>{text}</li>
      <button onClick={() => onClick(id)}>Usuń</button>
    </>
  );
};

export default Item;
