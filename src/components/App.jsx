import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ToDoItem from "./ToDoItem";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [inputText, setInputText] = useState("");
  const [priority, setPriority] = useState("");
  const [items, setItems] = useState([]);

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handlePriorityChange(event) {
    const newPriority = event.target.value;
    setPriority(newPriority);
  }

  function addItem() {
    setItems((prevItems) => {
      return [
        ...prevItems,
        { text: inputText, dueDate: selectedDate, priority: priority }
      ];
    });
    setInputText("");
    setSelectedDate(null);
    setPriority("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          placeholder="Enter a task"
        />
        <div className="date-picker">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Assign due-date"
          />
        </div>
        <select value={priority} onChange={handlePriorityChange}>
          <option value="">priority</option>
          <option value="low">🟢 Low</option>
          <option value="medium">🟠 Medium</option>
          <option value="high">🔴 High</option>
        </select>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              todoItem={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
