import { memo } from "react";
import { string } from "prop-types";

const Notification = ({ title, message }) => {
  return (
    <div className="notification">
      <p className="notification__title">{title}</p>
      <p className="notification__message">{message}</p>
    </div>
  );
};

const NotificationMemo = memo(Notification);
export { NotificationMemo as Notification };

Notification.propTypes = {
  title: string.isRequired,
  message: string.isRequired
};
