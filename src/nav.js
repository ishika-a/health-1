import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/nav.css';


function NAV(){
    return( 
        <div className="container-fluid">
            <div className='pic'>
                <img id='inquest'class='float-left' src={require('./Assets/health.jpg')} alt='Nothing' height='150' />
            </div>
            <ul className='nav justify-content end'>
                <Link id='option' to='/'><li>HOME</li></Link>
                <Link id='option' to='/signup'><li>SIGN UP</li></Link>
                
                <Link id='option' to='/login'><li>LOGIN</li></Link>
                <Link id='option' to='/bmicalculator'><li>BMI CALCULATOR</li></Link>
                <Link id='option' to='/caloriecalc'><li>CALORIE CALCULATOR</li></Link>
                <Link id='option' to='/faq'><li>FAQ</li></Link>
            </ul>
        </div>
    );
  }

  export default NAV;
