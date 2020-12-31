import { memo } from "react";
import { bool } from "prop-types";
import { IconDollar, IconRegisterDollar } from "../assets/icons/index";

const Steps = ({ step }) => {
  const activeLine = step ? "line" : "line line__active";
  const activeStep = step ? "step" : "step step__active";
  const iconColor = step ? "#A6AFBD" : "#FFFFFF";

  return (
    <div className="content-step">
      <div className="step step__active">
        <IconDollar fill="#ffffff" />
      </div>
      <div className={activeLine}></div>
      <div className={activeStep}>
        <IconRegisterDollar fill={iconColor} />
      </div>
    </div>
  );
};

const StepMemo = memo(Steps);
export { StepMemo as Steps };

Steps.propTypes = {
  step: bool.isRequired
};
