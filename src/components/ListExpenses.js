import { memo } from "react";
import { arrayOf, shape, string, number } from "prop-types";
import { ItemExpense } from "./ItemExpense";

const ListExpenses = ({ expenses }) => {
  return (
    <div>
      <h2>Listado de gastos</h2>
      <ul>
        {expenses &&
          expenses.map(item => (
            <ItemExpense
              key={item.id}
              name={item.name}
              expense={item.expense}
            />
          ))}
      </ul>
    </div>
  );
};

ListExpenses.propTypes = {
  expenses: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      expense: number.isRequired
    })
  )
};

const ListExpensesMemo = memo(ListExpenses);
export { ListExpensesMemo as ListExpenses };
