import { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    //for immutability create new array and add the new item
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      //.map(create new item), (...item) go through the array and if the item is !packed (not packed) then pack?
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      {/* Convention says create the function as "handle..." and send as prop as
      "on..." */}
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
