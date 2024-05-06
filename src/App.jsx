import { nanoid } from "nanoid";
import Form from "./Form";
import Items from "./Items";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
}

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
    console.log(list);
  } else {
    list = [];
  }
  return list;
}

const App = () => {
  getLocalStorage();
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(getLocalStorage());

  const addTodo = (newItemName) => {

    const newItem = {
      id: nanoid(),
      name: newItemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  }
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  }
  return (
    <section className="section-center">
      <Form addTodo={addTodo}/>
      <Items items={items} removeItem={removeItem} editItem={editItem}/>
      <ToastContainer position="top-center"/>
    </section>
  )
};

export default App;
