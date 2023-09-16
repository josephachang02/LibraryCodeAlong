import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';
import './index.css';

const LightSwitch = ({lightIsOn, setLightIsOn}) => {
  
  return (
    <div className="page-container">
        <LightModeIcon className={`light-icon  ${lightIsOn ? "color-yellow" : ""}`} />
        {/* text */}
        <button onClick={() => setLightIsOn(!lightIsOn)}>Change the light!</button>
        {/* button to change the icon */}
    </div>
  )
}

export default LightSwitch