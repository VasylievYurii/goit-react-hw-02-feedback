import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <p className={css.header}>{title}</p>
      {children}
    </div>
  );
};

export default Section;
