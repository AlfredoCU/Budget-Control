import { memo } from "react";
import { number } from "prop-types";

const Residuary = ({ budget, residuary }) => {
  const color =
    budget / 4 > residuary
      ? "alert"
      : budget / 2 > residuary
      ? "warning"
      : "good";

  return (
    <div className="residuary">
      <p>Presupuesto: $ {budget}</p>
      <p className={color}>Restante: $ {residuary}</p>
    </div>
  );
};

Residuary.propTypes = {
  budge: number,
  residuary: number
};

Residuary.defaultProps = {
  budge: 0,
  residuary: 0
};

const ResiduaryMemo = memo(Residuary);
export { ResiduaryMemo as Residuary };
