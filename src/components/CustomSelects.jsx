/* eslint-disable react/prop-types */
import { useState } from "react";
import "./CustomSelects.css";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const CustomSelects = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(null);
  const [multipleSelected, setMultipleSelected] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isMulti, setIsMulti] = useState(false);
  //   const [isDisabled,setIsDisabled] = useState()

  //   console.log(checked)

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

  //   let isMulti = true;
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
  // console.log(multipleSelected);
  return (
    <div className="kzui-custom_container">
      <h1 className="kzui-custom_heading">Custom Selects Options</h1>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`kzui-select_container ${checked && "kzui-select_disabled"}`}
      >
        <span className="kzui-select_title">
          {isMulti ? (
            multipleSelected.length === 0 ? (
              placeholder[1]
            ) : (
              multipleSelected?.map((selectItem, index) => (
                <span key={index}>{selectItem}</span>
              ))
            )
          ) : selectValue === null ? (
            placeholder[0]
          ) : (
            <span>{selectValue}</span>
          )}

          <FaArrowAltCircleDown
            className={`${
              multipleSelected.length > 0 || selectValue !== null
                ? "kzui-dropdwon_arrow_open"
                : "kzui-dropdwon_arrow"
            } `}
          ></FaArrowAltCircleDown>
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
        <span className="kzui-search_selected">
          <input type="text" name="" placeholder="search item..." id="" />
          <button>Search</button>
        </span>
        <span className="kzui-clear_selected">
          Clear Selected
          <FaDeleteLeft
            className="kzui-clear_select_icon"
            onClick={isMulti ? handleMultiDelete : handleDeleteSelect}
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
        <span className="kzui-is_multi">
          isMulti
          <input
            value={checked}
            onChange={handleIsMulti}
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
