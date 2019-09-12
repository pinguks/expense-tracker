import React, { Component } from "react";
import uuid from "uuid";

import BudgetView from "./components/BudgetView";
import BudgetForm from "./components/BudgetForm";
import BudgetList from "./components/BudgetList";

function getFromLocalStorage() {
  const budget = localStorage.getItem("budgetTracker");

  if (!budget) {
    return;
  }

  return JSON.parse(budget);
}

class App extends Component {
  state = {
    Income: [],
    Expenses: []
  };

  componentDidMount() {
    const budget = getFromLocalStorage();

    if (!budget) {
      return;
    }

    this.setState({ Income: budget.Income, Expenses: budget.Expenses });
  }

  saveToLocalStorage = () => {
    localStorage.setItem("budgetTracker", JSON.stringify(this.state));
  };

  addRecord = ({ selected, description, amount }) => {
    const newBudget = {
      description,
      amount,
      id: uuid()
    };

    if (selected === "+") {
      this.setState({ Income: [...this.state.Income, newBudget] }, () => {
        this.saveToLocalStorage();
      });
    } else {
      this.setState({ Expenses: [...this.state.Expenses, newBudget] }, () => {
        this.saveToLocalStorage();
      });
    }
  };

  deleteRecord = (type, id) => {
    const newState = this.state[type].filter(obj => obj.id !== id);

    this.setState({ [type]: newState }, () => {
      this.saveToLocalStorage();
    });
  };

  render() {
    const { Income, Expenses } = this.state;

    return (
      <div className="App">
        <BudgetView income={Income} expenses={Expenses} />
        <BudgetForm addRecord={this.addRecord} />
        <BudgetList
          income={Income}
          expenses={Expenses}
          deleteRecord={this.deleteRecord}
        />
      </div>
    );
  }
}

export default App;
