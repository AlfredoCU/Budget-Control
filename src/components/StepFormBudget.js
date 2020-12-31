import { useState } from "react";
import { func } from "prop-types";
import { Notification } from "./Notification";
import { useForm } from "../hooks/useForm";

export const StepFormBudget = ({ handleStepChange, handleBudgetChange }) => {
  const [inputs, handleInputChange, reset] = useForm({ budget: "" });
  const { budget } = inputs;

  const [error, setError] = useState(false);

  const submit = ev => {
    ev.preventDefault();

    if (budget.trim() === "" || budget < 1 || isNaN(budget)) {
      setError(true);
      return;
    }

    const budgetNum = parseFloat(budget);

    handleBudgetChange(budgetNum);
    handleStepChange();
    setError(false);
    reset();
  };

  return (
    <>
      {error && (
        <Notification
          title="Presupuesto"
          message="El valor es incorrecto, debe de ser un número positivo"
        />
      )}
      <form onSubmit={submit} className="form">
        <h1>Ingresa tu presupuesto</h1>
        <label htmlFor="budget" id="label-budget">
          Presupuesto:
        </label>
        <input
          required
          step="0.01"
          id="budget"
          type="number"
          name="budget"
          value={budget}
          autoComplete="off"
          onChange={handleInputChange}
          placeholder="Escribe tu presupuesto..."
        />
        <button type="submit">Definir presupuesto</button>
      </form>
    </>
  );
};

StepFormBudget.propTypes = {
  handleStepChange: func.isRequired,
  handleBudgetChange: func.isRequired
};
