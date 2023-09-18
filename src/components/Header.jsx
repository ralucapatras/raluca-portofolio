import './Header.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import { HashLink as Link } from 'react-router-hash-link';


function Header(){
return ( 
    
<header>
    <div class="section">
    <div class ="lightIcon">
        <Link to="#home" className='item'>
        <LightModeIcon fontSize='large'/></Link>
    </div>
    <div class="container">
        <div class="item">
            <Link to="#about" className='item'>
                About Me
            </Link>
        </div>
        <div className="item">
            <Link to ="#skills" className='item'>My Skills</Link> </div>
        <div class="item">
            <Link to ="#work" className='item'>My Work</Link> </div>
        <div class="item">
            <Link to="#contact" className='item'>Contact Me</Link> </div>
    </div>
    </div>
</header>

)
}

export default Header;