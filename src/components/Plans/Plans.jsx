import React from 'react'
import './Plans.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";



const Plans = () => {
    return (
        <div className='plans-section' id='plans'>

            <div className='plans-container'>
                <div className='plans-element-text-part'>
                    <div>
                        <label>Basic Plan
                        </label>

                        <span class="dollar-sign">$</span>
                        <h3>35</h3>

                        <span>Every month </span>
                        <p>Unlock Advanced Tools for Growing Businesses</p>
                        <span>Valid for 3 months</span>
                        <button>Choose This</button>
                    </div>


                    <ul className='plans-list'>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>


                    </ul>
                </div>

                <div className='plans-element-text-part'>
                    <div>
                        <label>Enterprise Plan
                        </label>
                        <span class="dollar-sign">$</span>
                        <h3>68.99</h3>
                        <span>Every month </span>
                        <p>Unlock Advanced Tools for Growing Businesses</p>
                        <span>Valid for 3 months</span>
                        <button>Choose This</button>
                    </div>


                    <ul className='plans-list'>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>

                    </ul>
                </div>






                <div className='plans-element-text-part'>
                    <div>
                        <label>Pro Plan
                        </label>
                        <span class="dollar-sign">$</span>
                        <h3>45</h3>
                        <span>Every month </span>
                        <p>Unlock Advanced Tools for Growing Businesses</p>
                        <span>Valid for 3 months</span>
                        <button>Choose This</button>
                    </div>


                    <ul className='plans-list'>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>
                        <li> <IoIosCheckmarkCircleOutline className='plans-icon'></IoIosCheckmarkCircleOutline>Use this space to promote the business.</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Plans