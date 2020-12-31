import { useState, useCallback } from "react";
import { StepFormBudget, StepExpenses, Steps } from "../components/index";

export const App = () => {
  const [step, setStep] = useState(true);
  const [budget, setBudget] = useState(0);

  const handleStepChange = useCallback(() => {
    setStep(false);
  }, [setStep]);

  const handleBudgetChange = useCallback(
    budgetNum => {
      setBudget(budgetNum);
    },
    [setBudget]
  );

  return (
    <>
      <div className="container">
        <Steps step={step} />
        <div className="content-form">
          {step ? (
            <StepFormBudget
              handleStepChange={handleStepChange}
              handleBudgetChange={handleBudgetChange}
            />
          ) : (
            <StepExpenses budget={budget} />
          )}
        </div>
      </div>
    </>
  );
};
