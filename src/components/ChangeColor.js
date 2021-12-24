import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

function ChangeColor() {
    const dispatch = useDispatch();
    const [color, setColor] = useState("no color");
    return (
        <div>
            <div>current color: {color}</div>
                <input type="text"
                    onChange={
                        (event) => {
                            setColor(event.target.value);
                        }}
                />
            <button onClick={() => dispatch(changeColor({color: color}))}>Change Color</button>
        </div>
    )
}

export default ChangeColor
