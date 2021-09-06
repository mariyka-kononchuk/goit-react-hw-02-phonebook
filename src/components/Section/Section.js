import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => (
    <div className={s.section}>
        <div className={s.title}>{title}</div>
        <div>{children}</div>
    </div>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;