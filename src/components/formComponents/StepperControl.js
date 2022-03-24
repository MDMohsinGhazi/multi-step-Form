import React, { useContext } from "react";
import { FormContext } from "../Form";

const StepperControl = (props) => {
  const context = useContext(FormContext);
  // const check = () => {
  //   if (
  //     props.formik.values.fName &&
  //     props.formik.values.lName &&
  //     props.formik.values.email &&
  //     props.formik.values.phone
  //   ) {
  //     return context.dispatch({ type: "next" });
  //   } else {
  //     alert("Enter required Fields");
  //   }
  // };

  return (
    <div className="container flex justify-around mt-4 mb-8">
      <button
        type="button"
        className="bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        onClick={() => context.dispatch({ type: "prev" })}
        disabled={context.state.step === 1}
      >
        back
      </button>

      <div>
        {context.state.step === 3 ? (
          <button
            type="submit"
            className="bg-green-600 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
          >
            submit
          </button>
        ) : (
          <button
            type="button"
            className="bg-green-600 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
            onClick={() => context.dispatch({ type: "next" })}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default StepperControl;
