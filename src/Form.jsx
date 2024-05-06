import { useState } from "react";
import { toast } from "react-toastify";
import logo from "./assets/logo.jpg";

const Form = ({ addTodo }) => {
    const [newItemName, setNewItemName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItemName) return;
        addTodo(newItemName);
        toast.success('New todo added');
        setNewItemName('');
    }


  return (
    <form onSubmit={handleSubmit}>
        <h4>Todos List</h4>
        <img src={logo} alt="logo" className="logo"/>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit" className="btn">
          Add Todo
        </button>
      </div>
    </form>
  );
};
export default Form;
