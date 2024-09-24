import React, { useState } from 'react';
import './Remainder.css';

function Remainder() {
    const [remainder, setRemainder] = useState([]);
    const [newRemainder, setNewRemainder] = useState('');
    
    const handleInputChange = (event) => {
        setNewRemainder(event.target.value);
    };

    const handleDeleteRemainder = (index) => {
        const updatedRemainder = remainder.filter((_, i) => i !== index);
        setRemainder(updatedRemainder);
    };

    const handleAddRemainder = () => {
        if (newRemainder.trim() !== '') {
            setRemainder([...remainder, newRemainder]);
            setNewRemainder(''); // Clear the input field after adding
        }
    };

    return (
        <div className='container'>
            <h1>Remainder App</h1>

            <div className='input-container'>
                <input 
                    type='text'
                    placeholder='Enter a Remainder'
                    value={newRemainder}
                    onChange={handleInputChange}
                />
                <button className='add-btn' onClick={handleAddRemainder}>
                    Add Remainder
                </button>
            </div>

            <ul className='remainder-list'>
                {
                    remainder.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button 
                                onClick={() => handleDeleteRemainder(index)} 
                                className='delete-btn'
                            >
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Remainder;
