import React from 'react';
import classNames from 'classnames';
// Components
import Input from 'components/input';
// Styles
import './styles.sass';
import { ReactComponent as Check } from 'assets/images/icons/check.svg';

const Checkbox = ({ checked, className, label, onChange, name, ...otherProps }) => {
  const classnames = classNames({
    'checkbox': true,
    [className]: className,
  });

  return (
    <label className={classnames} {...otherProps} onClick={(e) => e.stopPropagation()}>
      <div className="checkbox__box">
        <Input standard={false} className="checkbox__input" type="checkbox" checked={checked} name={name} onChange={onChange} />
        <span className="checkbox__checkmark">
          <Check className="checkbox__checkmark-icon" />
        </span>
      </div>
      {label && <div className="checkbox__label">{label}</div>}
    </label>
  );
};

export default Checkbox;