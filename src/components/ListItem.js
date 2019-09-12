import "../css/BudgetListItem.css";
import React from "react";
import formatPrice from "../utils/formatPrice";

const ListItem = ({ id, description, amount, tag, deleteRecord }) => {
  return (
    <li className={`${tag}-list-item`} key={id}>
      <p className={`${tag}-list-item-title`}>{description}</p>
      <p className={`${tag}-list-item-price`}>
        {tag === "Income" ? "+" : "-"} {formatPrice(amount)}
      </p>
      <i
        className="icon ion-md-close"
        onClick={() => deleteRecord(tag, id)}
      ></i>
    </li>
  );
};

export default ListItem;
