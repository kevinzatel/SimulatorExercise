import React, { useEffect, useState } from 'react';
import './Simulator.css'
import 'rc-slider/assets/index.css'
import SliderInputField from './Fields/SliderInputField';
import Result from './Result/Result';
import Footer from './Footer/Footer';

const MIN_MONTO_TOTAL = 5000;
const MAX_MONTO_TOTAL = 50000;
const MIN_PLAZO = 3;
const MAX_PLAZO = 24;
const INPUT_ERROR_MESSAGE = 'Debe ingresar un valor entre los permitidos';
const montoTotalMarksLabels = {
    min: '$' + MIN_MONTO_TOTAL,
    max: '$' + MAX_MONTO_TOTAL
}
const plazoMarksLabels = {
    min: MIN_PLAZO,
    max: MAX_PLAZO
}

const Simulator = () => {
    const [montoTotal, setMontoTotal] = useState(MIN_MONTO_TOTAL);
    const [plazo, setPlazo] = useState(MIN_PLAZO);
    const [isFormValid, setIsFormValid] = useState(true);
    const total = (montoTotal / plazo).toFixed(2);

    useEffect(() => {
        const validateForm = () => {
            (montoTotal < MIN_MONTO_TOTAL || montoTotal > MAX_MONTO_TOTAL) ||
                (plazo < MIN_PLAZO || plazo > MAX_PLAZO) ?
                setIsFormValid(false) : setIsFormValid(true);
        }
        validateForm();
    }, [montoTotal, plazo])

    return (
        <div className='outerContainer'>
            <div className='innerContainer'>
                <div className='content'>
                    <h1>Simulá tu crédito</h1>
                    <SliderInputField
                        label='MONTO TOTAL'
                        value={montoTotal}
                        onChange={setMontoTotal}
                        minValue={MIN_MONTO_TOTAL}
                        maxValue={MAX_MONTO_TOTAL}
                        markLabels={montoTotalMarksLabels}
                        errorMessage={INPUT_ERROR_MESSAGE}
                    />
                    <SliderInputField
                        label='PLAZO'
                        value={plazo}
                        onChange={setPlazo}
                        minValue={MIN_PLAZO}
                        maxValue={MAX_PLAZO}
                        markLabels={plazoMarksLabels}
                        errorMessage={INPUT_ERROR_MESSAGE}
                    />
                    <Result total={total} isFormValid={isFormValid} />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Simulator;