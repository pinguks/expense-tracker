import "../css/BudgetList.css";
import React from "react";

import ListItem from "./ListItem";

const BudgetList = ({ income, expenses, deleteRecord }) => {
  return (
    <div className="List">
      <div className="Income">
        <p className="Income-title">Income</p>
        <ul className="Income-list">
          {income.map(inc => {
            return (
              <ListItem
                key={inc.id}
                tag="Income"
                id={inc.id}
                description={inc.description}
                amount={inc.amount}
                deleteRecord={deleteRecord}
              />
            );
          })}
        </ul>
      </div>
      <div className="Expenses">
        <p className="Expenses-title">Expenses</p>
        <ul className="Expenses-list">
          {expenses.map(exp => {
            return (
              <ListItem
                key={exp.id}
                tag="Expenses"
                id={exp.id}
                description={exp.description}
                amount={exp.amount}
                deleteRecord={deleteRecord}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BudgetList;
