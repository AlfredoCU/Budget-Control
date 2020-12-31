import { memo } from "react";
import { number, string } from "prop-types";

const ItemExpense = ({ name, expense }) => {
  return (
    <li className="item-list">
      <p className="item-list__expense">
        {name} <span className="item-list__cost">$ {expense}</span>
      </p>
    </li>
  );
};

ItemExpense.propTypes = {
  name: string.isRequired,
  expense: number.isRequired
};

const ItemExpenseMemo = memo(ItemExpense);
export { ItemExpenseMemo as ItemExpense };
