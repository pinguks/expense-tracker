import "../css/BudgetForm.css";
import React, { useState } from "react";

const Form = ({ addRecord }) => {
  const [selected, setSelected] = useState("+");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();

    if (!description || !amount) {
      return;
    }

    addRecord({ selected, description, amount });

    setDescription("");
    setAmount("");
  }

  function onSelectChange(e) {
    setSelected(e.target.value);
  }

  function onDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function onAmountChange(e) {
    if (e.target.value) {
      setAmount(parseFloat(e.target.value));
    } else {
      setAmount("");
    }
  }

  return (
    <div className="Form">
      <form className="Form-container" onSubmit={onFormSubmit}>
        <select className="Form-select" onChange={onSelectChange}>
          <option value="+" defaultValue>
            +
          </option>
          <option value="-">-</option>
        </select>

        <input
          maxLength={30}
          className="Form-description"
          type="text"
          value={description}
          onChange={onDescriptionChange}
          placeholder="Enter description"
        />

        <input
          max={100000}
          className="Form-amount"
          type="number"
          value={amount}
          onChange={onAmountChange}
          placeholder="Amount"
        />

        <button type="submit" className="Form-btn">
          Add to budget
        </button>
      </form>
    </div>
  );
};

export default Form;
