import { Link } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import './index.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Sidebar = ({lightIsOn}) => {
  return (
    <aside id="sidebar">
      {/* user icon */}
      <LightModeIcon className={`${lightIsOn ? "color-yellow" : ""}`}/>
      <AccountBoxIcon />
      <div>Name ???? </div>
      {/* <button>Login/Create</button> */}
      <Link to="/" >
        <button>Light Switch</button>
      </Link>
      <Link to="/new" >
        <button>New Book</button>
      </Link>
      <Link to="/library" >
        <button>View Books</button>
      </Link>
    </aside>
  )
};

export default Sidebar