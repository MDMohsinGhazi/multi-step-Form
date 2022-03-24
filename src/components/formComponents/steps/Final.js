import { Field } from "formik";
import React from "react";

const Final = () => {
  return (
    <div className="my-14 grid content-center justify-center font-semibold">
      <h1 className="text-xl font-semibold text-gray-600">
        By clicking on Yes, You agree to our{" "}
        <a className="underline text-gray-800" href="#">
          Terms and condition
        </a>
      </h1>
      <label className="text-md text-green-700 ">Do you want to submit</label>
      <label htmlFor="agree">
        <Field type="radio" name="agree" id="agree" value="yes" />
        Yes
      </label>
      <label htmlFor="agree">
        <Field type="radio" name="agree" id="agree" value="no" />
        No
      </label>
    </div>
  );
};

export default Final;
