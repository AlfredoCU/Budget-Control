import { useState, memo } from "react";
import { number, func } from "prop-types";
import { useForm } from "../hooks/useForm";
import { Notification } from "./Notification";

const FormExpense = ({ residuary, createExpense, subtract }) => {
  const [inputs, handleInputChange, reset] = useForm({ name: "", expense: "" });
  const { name, expense } = inputs;

  const [error, setError] = useState(false);

  const [notification, setNotification] = useState({
    title: "",
    message: ""
  });
  const { title, message } = notification;

  const submit = ev => {
    ev.preventDefault();

    if (name.trim() === "") {
      setNotification({
        title: "Nombre del gasto",
        message: "El campo está vacío, es necesario llenarlo."
      });
      setError(true);
      return;
    }

    if (expense.trim() === "") {
      setNotification({
        title: "Costo del gasto",
        message: "El campo está vacío, es necesario llenarlo."
      });
      setError(true);
      return;
    }

    if (expense < 1) {
      setNotification({
        title: "El número es cero o negativo",
        message: "El valor es incorrecto, debe de ser un número positivo"
      });
      setError(true);
      return;
    }

    if (isNaN(expense)) {
      setNotification({
        title: "No es un número",
        message: "El valor es incorrecto, debe de ser un número"
      });
      setError(true);
      return;
    }

    if (expense > residuary) {
      setNotification({
        title: "El costo supera el presupuesto",
        message: "El costo es mayor de su restante actual"
      });
      setError(true);
      return;
    }

    const expenseNum = parseFloat(expense);
    const data = { id: new Date().getTime(), name: name, expense: expenseNum };

    subtract(expenseNum);
    createExpense(data);
    setError(false);
    reset();
  };

  return (
    <>
      {error && <Notification title={title} message={message} />}
      <form onSubmit={submit} className="form-expenses">
        <h2>Agrega tus gastos</h2>
        <label htmlFor="name" id="label-name">
          Nombre del gasto:
        </label>
        <input
          required
          id="name"
          type="text"
          name="name"
          value={name}
          autoComplete="off"
          onChange={handleInputChange}
          placeholder="Ejemplo: Comida"
        />
        <label htmlFor="expense" id="label-expense">
          Costo del gasto:
        </label>
        <input
          required
          step="0.01"
          id="expense"
          type="number"
          name="expense"
          value={expense}
          autoComplete="off"
          onChange={handleInputChange}
          placeholder="Ejemplo: 1000"
        />
        <button type="submit" className="button">
          Agregar gasto
        </button>
      </form>
    </>
  );
};

FormExpense.propTypes = {
  residuary: number.isRequired,
  createExpense: func.isRequired,
  subtract: func.isRequired
};

const FormExpenseMemo = memo(FormExpense);
export { FormExpenseMemo as FormExpense };
