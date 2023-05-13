import React from 'react';

import img1 from '../../../assets/images/cups/Rectangle 10.png'
import img2 from '../../../assets/images/cups/Rectangle 11.png'
import img3 from '../../../assets/images/cups/Rectangle 12.png'
import img4 from '../../../assets/images/cups/Rectangle 13.png'
import img5 from '../../../assets/images/cups/Rectangle 14.png'
import img6 from '../../../assets/images/cups/Rectangle 15.png'
import img7 from '../../../assets/images/cups/Rectangle 16.png'
import img8 from '../../../assets/images/cups/Rectangle 9.png'

const Followus = () => {
    return (
        <div>
            <h1>Followus</h1>
            <div className='grid md:grid-cols-4 gap-4'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div>
                    <img src={img5} alt="" />
                </div>
                <div>
                    <img src={img6} alt="" />
                </div>
                <div>
                    <img src={img7} alt="" />
                </div>
                <div>
                    <img src={img8} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Followus;