import React, { useState } from "react";

export const AddCatsForm = ({ data, addCatToList }) => {
  const [catName, setCatName] = useState("");
  const [catLatinName, setCatLatinName] = useState("");
  const [catImageUrl, setCatImageUrl] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    addCatToList({ name: catName, catLatinName: catLatinName });
    setCatName("");
    setCatLatinName("");
    setCatImageUrl("");
  };

  const onChangeHandler = (setterFunction) => (event) => {
    setterFunction(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} style={{ width: "60%", margin: "auto" }}>
      <InputField 
        label="Name" 
        value={catName} 
        onChange={onChangeHandler(setCatName)} />
      <InputField 
        label="Latin Name" 
        value={catLatinName} 
        onChange={onChangeHandler(setCatLatinName)} />
      <InputField 
        label="Image URL" 
        value={catImageUrl} 
        onChange={onChangeHandler(setCatImageUrl)} />
      <button type="submit">Add CAT</button>
    </form>
  );
};

const InputField = ({ value, label, onChange }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};