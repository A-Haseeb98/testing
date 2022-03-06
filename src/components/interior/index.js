
import Q1 from '../../assets/images/Q1.png'
import Q2 from '../../assets/images/Q2.png'
import Q3 from '../../assets/images/Q3.png'
import Q4 from '../../assets/images/Q4.png'
import Q5 from '../../assets/images/Q5.png'
import Q6 from '../../assets/images/Q6.png'
import Q7 from '../../assets/images/Q7.png'
import Q8 from '../../assets/images/Q8.png'
import Q9 from '../../assets/images/Q9.png'
import Q10 from '../../assets/images/Q10.png'
import Q11 from '../../assets/images/Q11.png'
import Q12 from '../../assets/images/Q12.png'
import Q13 from '../../assets/images/Q13.png'
import Q14 from '../../assets/images/Q14.png'
import Q15 from '../../assets/images/Q14.png'
import Q16 from '../../assets/images/Q16.png'
import Q17 from '../../assets/images/Q17.png'
import Q18 from '../../assets/images/Q18.png'
import Q19 from '../../assets/images/Q19.png'
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react'
import './index.css'

function Interior() {
    return (
        <div className="interior_container">
            <div className='cover_container_int'>
                <div className='plane_hover_box'>
                </div>
                <div className='suitcase_hover_box'>
                </div>
                
                <div className='departure_hover_box'>
                <HashLink smooth to="/home/#demo"></HashLink>

                </div>
                <img className='main_background' src={Q19} alt='Q' />
                <img className='plane_i' src={Q6} alt='Q' />
                <img className='fan' src={Q18} alt='Q' />
                <img src={Q17} alt='Q' />
                <img src={Q16} alt='Q' />
                <img src={Q15} alt='Q' />
                <img src={Q14} alt='Q' />
                <img src={Q13} alt='Q' />
                <img className='suit_case' src={Q12} alt='Q' />
                <img src={Q11} alt='Q' />
                <img src={Q10} alt='Q' />
                <img src={Q9} alt='Q' />
                <img src={Q8} alt='Q' />
                <img src={Q7} alt='Q' />
                <img src={Q5} alt='Q' />
                <img src={Q4} alt='Q' />
                <img src={Q3} alt='Q' />
                <img src={Q2} alt='Q' />
                <img src={Q1} alt='Q' />
            </div>
            <div id='demo' className='text_container'>
                hello
            </div>
        </div>
    );
}

export default Interior;
