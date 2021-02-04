import { useState } from "react";
import AddItem from "./components/AddItem";
import List from "./components/List";
import { data } from "./data/data";

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

    const subjects = [...items];
    subjects.push(newItem);
    setItems(subjects);
    setValue("");
  };

  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      let counter = items[items.length - 1].id;
      counter++;

      const newItem = {
        id: counter,
        text: value,
        isVisible: true,
      };

      const subjects = [...items];
      subjects.push(newItem);
      setItems(subjects);
      setValue("");
    }
  };

  return (
    <div>
      <AddItem
        onClickEnter={handleEnterClick}
        value={value}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <List items={items} handleClick={handleClick} />
    </div>
  );
};

export default App;
