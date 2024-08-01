
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

  return (
    <div className='kzui-app_container'>
      <CustomSelects options={options}></CustomSelects>
    </div>
  )
}

export default App
