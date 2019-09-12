import "../css/BudgetView.css";
import React from "react";

import formatPrice from "../utils/formatPrice";

const BudgetView = ({ income, expenses }) => {
  const totalIncome = income.reduce((acc, income) => acc + income.amount, 0);
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  const totalBudget = totalIncome - totalExpenses;

  return (
    <div className="View">
      <div className="View-container">
        <p className="View-total">{formatPrice(totalBudget)}</p>
        <div className="View-income">
          <p>Income</p>
          <p className="View-income-total">+ {formatPrice(totalIncome)}</p>
        </div>
        <div className="View-expenses">
          <p>Expenses</p>
          <p className="View-expenses-total">- {formatPrice(totalExpenses)}</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetView;
