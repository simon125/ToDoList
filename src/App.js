import { useState } from "react";
import AddItem from "./components/AddItem";
import List from "./components/List";
import { data } from "./data/data";
import Item from "./Item";

const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(data);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (id) => {
    let subjects = [...items];
    subjects[id].isVisible = false;

    setItems(subjects);
  };

  const handleSubmit = () => {
    let counter = items[items.length - 1].id;
    counter++;

    const newItem = {
      id: counter,
      text: value,
      isVisible: true,
    };

    setItems((items) => [...items, newItem]);
    setValue("");
  };

  const list = items.filter((item) =>
    item.isVisible ? (
      <Item onClick={handleClick} key={item.id} id={item.id} text={item.text} />
    ) : null
  );

  return (
    <div>
      <AddItem value={value} onSubmit={handleSubmit} onChange={handleChange} />
      <List list={list} />
    </div>
  );
};

export default App;
