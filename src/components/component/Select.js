import React from "react";
import { Field } from "formik";

const Select = (props) => {
  return (
    <div>
      <Field
        as="select"
        name={props.name}
        className="w-full p-1 outline-none border-b-2 hover:border-green-700  transition duration-300 ease-in-out"
      >
        <option key="select" value="" disabled defaultValue="">
          {String(props.name).toUpperCase().charAt(0) +
            String(props.name).slice(1)}
        </option>
        {props.opts.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default Select;
