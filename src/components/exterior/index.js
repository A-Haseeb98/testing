import './index.css'
// import pic from '../../assets/images/ex-org.jpg'
import pic from '../../assets/images/exterior.png'
import pic1 from '../../assets/images/ex1.png'
import pic2 from '../../assets/images/ex2.png'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReactTooltip from 'react-tooltip';

function Exterior() {
    const history = useHistory()

    const [clas, setClas] = useState('no_hover')


    var overMouse = () => {
        setClas('hover')

        setTimeout(function () {
            history.push('/home')
        }, 1200);
    }

    return (
        <div className='exterior_container'>
            <h1 className='head'>Navbar</h1>
            <div className='ex_container'>
                <img className='orginal' src={pic} alt='img' />
                <img className={`lap ${clas}`} src={pic2} alt='img' />
                <img className={`plane ${clas}`} src={pic1} alt='img' />
                <div onClick={overMouse} className='polygon'>  <a data-tip="Click To Enter"> <ReactTooltip place="top" type="dark" effect="solid" />       </a>  </div>
            </div>
        </div>
    );
}

export default Exterior;
