import React, { useState } from 'react';
import Slider from 'rc-slider';
import './SliderInputField.css';

const InputField = ({ label, value, onChange, minValue, maxValue, errorMessage, markLabels }) => {
    const [error, setError] = useState(false);

    const marks = {
        [minValue]: {
            style: { color: 'white', fontSize: '15px' },
            label: markLabels.min
        },
        [maxValue]: {
            style: { color: 'white', fontSize: '15px' },
            label: markLabels.max
        },
    }

    const isValid = value => {
        return value < minValue || value > maxValue ? false : true;
    }

    const handleChange = (value) => {
        onChange(value);
        isValid(value) ? setError(false) : setError(true);
    }

    return (
        <div className='field'>
            <label>{label}</label>
            <input
                min={minValue}
                max={maxValue}
                key={label}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                type='number'
            />

            {error &&
                <div className="tooltip">
                    <i className='material-icons'>warning</i>
                    <span className="tooltiptext">{errorMessage}</span>
                </div>}

            <div>
                <Slider
                    key={label}
                    value={value}
                    onChange={handleChange}
                    min={minValue}
                    max={maxValue}
                    marks={marks}
                    className='slider'
                />
            </div>
        </div>
    )
}

export default InputField;