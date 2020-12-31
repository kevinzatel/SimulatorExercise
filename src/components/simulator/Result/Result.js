import React from 'react';
import './Result.css';

const Simulator = ({ total, isFormValid }) => {
    return (
        <div className='result'>
            <>
                <h4 className='description'>CUOUTA FIJA POR MES</h4>
                <h1 className='total'>${isFormValid ? total : ' -'}</h1>
            </>
        </div>

    )
}

export default Simulator;