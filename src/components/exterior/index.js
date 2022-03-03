import './index.css'
// import pic from '../../assets/images/ex-org.jpg'
import pic from '../../assets/images/exterior.png'
import pic1 from '../../assets/images/ex1.png'
import pic2 from '../../assets/images/ex2.png'
import { useState } from 'react'
function Exterior() {
    const [clas, setClas] = useState('no_hover')

    var overMouse = () => {
        setClas('hover')
    }

    var no_hover = () => {
        setClas('no_hover')
    }

    return (
        <div className="exterior_container">
            <h1 className='head'>Navbar</h1>
            <div className='ex_container'>
                <img className='orginal' src={pic} alt='img' />
                <img className={`lap ${clas}`} src={pic2} alt='img' />
                <img className={`plane ${clas}`} src={pic1} alt='img' />
                <div onMouseOver={overMouse} onMouseOut={no_hover} className='polygon'></div>

            </div>
        </div>
    );
}

export default Exterior;
