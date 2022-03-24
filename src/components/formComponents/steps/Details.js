import React from "react";
import { Field, ErrorMessage } from "formik";

const Details = () => {
  return (
    <div className="my-14">
      <div className="grid grid-cols-1 md:grid-cols-2  grid-flow-row gap-10">
        <div className="relative">
          <Field
            type="text"
            id="fName"
            name="fName"
            className="peer placeholder:invisible w-full p-1 outline-none border-b-2 hover:border-green-700  transition duration-300 ease-in-out"
            placeholder="First Name"
          />
          <ErrorMessage
            name="fName"
            component="div"
            className="absolute text-sm text-red-700"
          />
          <label
            htmlFor="fName"
            className="absolute -top-3.5 left-0 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 transition-all ease-in-out duration-400"
          >
            First Name
          </label>
        </div>
        <div className="relative">
          <Field
            type="text"
            id="lName"
            name="lName"
            className=" peer placeholder:invisible w-full p-1 outline-none border-b-2 hover:border-green-700  transition duration-300 ease-in-out"
            placeholder="Last Name"
          />
          <ErrorMessage
            name="lName"
            component="div"
            className="absolute text-sm text-red-700"
          />
          <label
            htmlFor="lName"
            className="absolute -top-3.5 left-0 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 transition-all ease-in-out duration-400"
          >
            Last Name
          </label>
        </div>
        <div className="relative">
          <Field
            type="text"
            id="email"
            name="email"
            className=" peer placeholder:invisible w-full p-1 outline-none border-b-2 hover:border-green-700  transition duration-300 ease-in-out"
            placeholder="Email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="absolute text-sm text-red-700"
          />
          <label
            htmlFor="lName"
            className="absolute -top-3.5 left-0 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 transition-all ease-in-out duration-400"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <Field
            type="text"
            id="phone"
            name="phone"
            className=" peer placeholder:invisible w-full p-1 outline-none border-b-2 hover:border-green-700  transition duration-300 ease-in-out"
            placeholder="Phone Number"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="absolute text-sm text-red-700"
          />
          <label
            htmlFor="phone"
            className="absolute -top-3.5 left-0 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 transition-all ease-in-out duration-400"
          >
            Phone Number
          </label>
        </div>
        <div className="relative">
          <Field
            type="text"
            id="address"
            name="address"
            className=" peer placeholder:invisible w-full p-1 outline-none border-b-2 hover:border-green-700  transition duration-300 ease-in-out"
            placeholder="Address"
          />
          <ErrorMessage
            name="address"
            component="div"
            className="absolute text-sm text-red-700"
          />
          <label
            htmlFor="phone"
            className="absolute -top-3.5 left-0 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 transition-all ease-in-out duration-400"
          >
            Address
          </label>
        </div>
      </div>
    </div>
  );
};

export default Details;
