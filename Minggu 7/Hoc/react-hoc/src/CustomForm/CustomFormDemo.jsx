import React from "react";
import CustomForm from "./CustomFormHoc.jsx";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
  };
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    props.onChange(inputName, inputValue);
  };
  return (
    <div className="col-md-2">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input name="name" type="text" className="form-control" />
        <input type="email" name="email" className="form-control my-3" />
        <button type="submit" className="btn btn-success mb-3">
          Submit
        </button>
      </form>
    </div>
  );
};

const CustomFormDemo = (props) => {
  const FormWithCustom = CustomForm({ contact: { name: "", email: "" } })({
    propName: "contact",
    propListName: "contactList",
  })(Form);
  return (
    <div>
      <FormWithCustom {...props} />
    </div>
  );
};
export default CustomFormDemo;
