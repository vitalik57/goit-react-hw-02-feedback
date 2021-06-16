import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => <h2>{message}</h2>;
Notification.prototype = {
  message: PropTypes.string.isRequired
};
export default Notification;
