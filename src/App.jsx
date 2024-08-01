import { useState } from "react";
import "./App.css";

import CustomSelects from "./components/CustomSelects";

function App() {
  const options = [
    { value: "Apple", label: "Apple" },
    { value: "Orange", label: "Orange" },
    { value: "WaterMelon", label: "WaterMelon" },
    { value: "Banana", label: "Banana" },
    { value: "Mango", label: "Mango" },
  ];

  const [selectValue, setSelectValue] = useState(null);
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);
  const [isMulti, setIsMulti] = useState(false);

  const handleSelectValue = (e) => {
    // console.log(e.target.innerText)
    setSelectValue(e.target.innerText);
  };
  const handleDeleteSelect = () => {
    setSelectValue(placeholder[0]);
  };
  const handleChecked = () => {
    setChecked(!checked);
    // console.log(checked)
  };

  const handleMultiSelect = (e) => {
    if (isMulti) {
      const newSelected = [...multipleSelected, e.target.innerText];
      setMultipleSelected(newSelected);
    }
  };
  const handleIsMulti = () => {
    // console.log('clicked')
    setIsMulti(!isMulti);
  };

  const handleMultiDelete = () => {
    // console.log('delete');
    // console.log(multipleSelected);
    // const deleteSelected = multipleSelected.length-1;
    multipleSelected.pop(multipleSelected.length - 1);
    setMultipleSelected([...multipleSelected]);
    // console.log(newSelected)
  };

  const placeholder = ["Select Value", "Select Multiple Values"];

  return (
    <div className="kzui-app_container">
      <CustomSelects
        options={options}
        placeholder={placeholder}
        handleSelectValue={handleSelectValue}
        selectValue={selectValue}
        handleDeleteSelect={handleDeleteSelect}
        handleChecked={handleChecked}
        checked={checked}
        multipleSelected={multipleSelected}
        handleMultiSelect={handleMultiSelect}
        isMulti={isMulti}
        handleIsMulti={handleIsMulti}
        handleMultiDelete={handleMultiDelete}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></CustomSelects>
    </div>
  );
}

export default App;
