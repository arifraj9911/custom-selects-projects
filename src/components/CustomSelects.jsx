/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./CustomSelects.css";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const CustomSelects = ({
  options,
  placeholder,
  selectValue,
  handleSelectValue,
  handleDeleteSelect,
  handleChecked,
  checked,
  handleMultiSelect,
  multipleSelected,
  handleIsMulti,
  isMulti,
  handleMultiDelete,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div className="kzui-custom_container">
      <h1 className="kzui-custom_heading">
        Custom Select{" "}
        <span className="kzui-custom_heading_components_title">Components</span>{" "}
      </h1>
      <div
        onClick={() => {
          //   handleTypingClick();
          setIsOpen(!isOpen);
        }}
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
              className="kzui-select_item_ul"
              onClick={isMulti ? handleMultiSelect : handleSelectValue}
              key={index}
            >
              <li className="kzui-select_list_item">{item.label} </li>
            </ul>
          ))}
      </div>
      <div>
        {isMulti
          ? multipleSelected.length > 0 && (
              <span className="kzui-search_selected">
                <input type="text" name="" placeholder="search item..." id="" />
                <button>Search</button>
              </span>
            )
          : selectValue === null && (
              <span className="kzui-search_selected">
                <input type="text" name="" placeholder="search item..." id="" />
                <button>Search</button>
              </span>
            )}

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
