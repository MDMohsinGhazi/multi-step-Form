import React, { useReducer } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Stepper from "./formComponents/Stepper";
import StepperControl from "./formComponents/StepperControl";
import Details from "./formComponents/steps/Details";
import Final from "./formComponents/steps/Final";
import EducationDetails from "./formComponents/steps/EducationDetails";

export const FormContext = React.createContext();

const initialState = {
  steps: ["Personal Information", "Education Details", "Submition"],
  step: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "next":
      return { ...state, step: state.step + 1 };
    case "prev":
      return { ...state, step: state.step - 1 };
    default:
      return state;
  }
};

const MultiForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const details = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    "passing year": "",
    percentage: "",
    agree: "",
  };
  const validationSchema = Yup.object({
    fName: Yup.string().required("Enter first name"),
    lName: Yup.string().required("Enter last name"),
    email: Yup.string()
      .email("must be a valid mail")
      .required("Enter E-Mail address"),
    phone: Yup.string().length(10, "10 Digit number").required(),

    percentage: Yup.string()
      .matches(/^100|^[\d]{2}[.][\d]{0,2}$/, "formate: 72.16")
      .required(),
  });

  const submitHandler = (values, onSubmitProp) => {
    alert("submit");
  };

  return (
    <div className="container mx-auto bg-white p-10 w-4/5 mt-10 rounded-2xl shadow-md shadow-stone-400">
      <FormContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Stepper />
        <Formik
          initialValues={details}
          onSubmit={submitHandler}
          validationSchema={validationSchema}
        >
          {(formik) => {
            // console.log(formik);
            return (
              <Form onSubmit={formik.handleSubmit}>
                {state.step === 1 ? <Details /> : null}
                {state.step === 2 ? <EducationDetails /> : null}
                {state.step === 3 ? <Final /> : null}

                <StepperControl formik={formik} />
              </Form>
            );
          }}
        </Formik>
      </FormContext.Provider>
    </div>
  );
};

export default MultiForm;
