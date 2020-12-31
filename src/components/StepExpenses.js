import { memo, useState, useCallback } from "react";
import { number } from "prop-types";
import { Residuary } from "./Residuary";
import { FormExpense } from "./FormExpense";
import { ListExpenses } from "./ListExpenses";

const StepExpenses = ({ budget }) => {
  const [expenses, setExpenses] = useState([]);
  const [residuary, setResiduary] = useState(budget);

  const createExpense = useCallback(
    data => {
      setExpenses(expense => [...expense, data]);
    },
    [setExpenses]
  );

  const subtract = useCallback(
    sub => {
      setResiduary(res => res - sub);
    },
    [setResiduary]
  );

  return (
    <div className="content-expenses">
      <FormExpense
        residuary={residuary}
        createExpense={createExpense}
        subtract={subtract}
      />
      <div className="content-list">
        <ListExpenses expenses={expenses} />
        <Residuary budget={budget} residuary={residuary} />
      </div>
    </div>
  );
};

const StepExpensesMemo = memo(StepExpenses);
export { StepExpensesMemo as StepExpenses };

StepExpenses.propTypes = {
  budget: number.isRequired
};
