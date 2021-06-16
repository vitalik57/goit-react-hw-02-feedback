import PropTypes from "prop-types";
import React from "react";
const Section = ({ title, children }) => (
  <section>
    {title}
    {children}
  </section>
);
Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
export default Section;
