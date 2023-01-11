import React from "react";
import "./FormInput.css"

const FormInput = ({id, labelName, placeholder, inputType, ...rest}) => {
  return (
    <div className="formDiv">
      <label htmlFor={id}>{labelName}</label>
      <input placeholder={placeholder || "..."} id={id} type={inputType} {...rest}/>
    </div>
  );
};

export default FormInput;
