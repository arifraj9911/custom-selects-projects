/* eslint-disable react/prop-types */
import { useState } from "react";
import "./CustomSelects.css";

const CustomSelects = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Select value");

  const handleSelectValue = (e) => {
    // console.log(e.target.innerText)
    setSelectValue(e.target.innerText);
  };

  return (
    <div className="kzui-custom_container">
      <h1 className="kzui-custom_heading">Custom Selects Options</h1>
      <div onClick={() => setIsOpen(!isOpen)} className="kzui-select_container">
        <span className="kzui-select_title">{selectValue}</span>
        {isOpen &&
          options?.map((item, index) => (
            <ul onClick={handleSelectValue} key={index}>
              <li className="kzui-select_list_item">{item.label}</li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default CustomSelects;
