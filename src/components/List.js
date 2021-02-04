import Item from "./Item";

const List = ({ items, handleClick, onClickEnter }) => {
  const list = items.map((item) =>
    item.isVisible ? (
      <Item
        onClickEnter={onClickEnter}
        onClick={handleClick}
        key={item.id}
        id={item.id}
        text={item.text}
      />
    ) : null
  );

  return <ul>{list}</ul>;
};

export default List;
