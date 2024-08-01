
import './App.css'

import CustomSelects from "./components/CustomSelects"

function App() {
  const options = [
    { value: "Apple", label: "Apple" },
    { value: "Orange", label: "Orange" },
    { value: "WaterMelon", label: "WaterMelon" },
    { value: "Banana", label: "Banana" },
    { value: "Mango", label: "Mango" },
  ];

  const placeholder = ['Select Value','Select Multiple Values']

  return (
    <div className='kzui-app_container'>
      <CustomSelects options={options} placeholder={placeholder}></CustomSelects>
    </div>
  )
}

export default App
