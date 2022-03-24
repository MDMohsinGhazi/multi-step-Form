import React from "react";
import { ErrorMessage, Field } from "formik";
import Select from "../../component/Select";

const EducationDetails = () => {
  return (
    <div className="my-14  grid grid-cols-1 md:grid-cols-2  grid-flow-row gap-10">
      <div>
        <Select
          name="qualification"
          id="qualification"
          opts={["B.Tech", "M.Tech", "M.Com", "B.A", "M.A"]}
        />
      </div>
      <div>
        <Select name="passing year" id="year" opts={[2019, 2020, 2021, 2022]} />
      </div>
      <div className="relative">
        <Field
          type="number"
          name="percentage"
          id="percentage"
          className="w-full p-1 outline-none border-b-2 hover:border-green-700  transition duration-300 ease-in-out"
          placeholder="Percentage"
        />
        <ErrorMessage
          name="percentage"
          component="div"
          className="absolute text-sm text-red-600"
        />
      </div>
    </div>
  );
};

export default EducationDetails;
