/* eslint-disable react/prop-types */
import { useState } from "react";
import "./CustomSelects.css";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const CustomSelects = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Select value");
  const [multipleSelected, setMultipleSelected] = useState(
    [] || "Select value"
  );
  const [checked, setChecked] = useState(false);
  //   const [isDisabled,setIsDisabled] = useState()

  //   console.log(checked)

  const handleSelectValue = (e) => {
    // console.log(e.target.innerText)
    setSelectValue(e.target.innerText);
  };

  const handleDeleteSelect = () => {
    setSelectValue("Select value");
  };

  const handleChecked = () => {
    setChecked(!checked);
    // console.log(checked)
  };

  let isMulti = true;
  const handleMultiSelect = (e) => {
    if (isMulti) {
      const newSelected = [...multipleSelected, e.target.innerText];
      setMultipleSelected(newSelected);
    }
  };
  //   console.log(multipleSelected);
  return (
    <div className="kzui-custom_container">
      <h1 className="kzui-custom_heading">Custom Selects Options</h1>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`kzui-select_container ${checked && "kzui-select_disabled"}`}
      >
        <span className="kzui-select_title">
          {isMulti
            ? multipleSelected.map((selectItem,index) => <span key={index}>{selectItem}</span> )
            : selectValue}

          <FaArrowAltCircleDown className="kzui-dropdwon_arrow"></FaArrowAltCircleDown>
        </span>

        {isOpen &&
          options?.map((item, index) => (
            <ul
              onClick={isMulti ? handleMultiSelect : handleSelectValue}
              key={index}
            >
              <li className="kzui-select_list_item">{item.label} </li>
            </ul>
          ))}
      </div>
      <div>
        <span className="kzui-clear_selected">
          Clear Selected
          <FaDeleteLeft
            className="kzui-clear_select_icon"
            onClick={handleDeleteSelect}
          ></FaDeleteLeft>
        </span>
        <span className="kzui-disabled_select">
          Disabled
          <input
            value={checked}
            onChange={handleChecked}
            type="checkbox"
            name="check"
            id=""
          />
        </span>
      </div>
    </div>
  );
};

export default CustomSelects;
