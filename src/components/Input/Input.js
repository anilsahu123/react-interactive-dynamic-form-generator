import React from "react";

import classes from "./Input.module.css";

const input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "file":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          <option value="">{props.elementConfig.placeholder}</option>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );

      break;
    case "radio":
      inputElement = (
        <div>
          <label>{props.elementConfig.placeholder}</label>
          {props.elementConfig.options.map(option => (
            <div key={option.value}>
              <input
                type="radio"
                checked={props.value === option.value}
                onChange={props.changed}
                value={option.value}
              />
              {option.displayValue}
            </div>
          ))}
        </div>
      );
      break;

    case "checkbox":
      inputElement = (
        <div>
          <label>{props.elementConfig.placeholder}</label>
          {props.elementConfig.options.map(option => (
            <div key={option.value}>
              <input
                type="checkbox"
                defaultChecked={option.checked}
                onChange={props.changed}
                value={option.value}
              />
              {option.displayValue}
            </div>
          ))}
        </div>
      );

      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {props.invalid && props.shouldValidate && props.touched && (
        <span className={classes.errorText}>{props.shouldValidate.error}</span>
      )}
    </div>
  );
};

export default input;
