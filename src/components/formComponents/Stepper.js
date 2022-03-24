import React, { useContext } from "react";
import { FormContext } from "../Form";
import { TiTick } from "react-icons/ti";

const Stepper = () => {
  const context = useContext(FormContext);
  console.log(context.state.step);

  return (
    <div className="w-full text-center">
      <div className="container">
        <ul className="relative flex justify-between items-center w-full text-sm md:text-lg ">
          {context.state.steps.map((step, index) => {
            return (
              <li key={index} className="flex flex-col items-center">
                <div className="relative bg-green-200 w-8 h-8 rounded-full ring-2 ring-green-800 flex  justify-center items-center text-slate-700 font-semibold">
                  {context.state.step > index + 1 ? (
                    <TiTick className="bg-green-800 text-white rounded-full w-full h-full" />
                  ) : (
                    index + 1
                  )}
                </div>

                <div>{step}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Stepper;
