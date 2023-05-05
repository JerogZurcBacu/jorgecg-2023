import React, { useState } from "react";
import {
    SwitchContiner,
    SwitchWrapper,
    SwitchBGC,
    ButtonSwitch,
} from './Switch.elements';
import { BsSun, BsMoon } from "react-icons/bs";

const Switch = (props) => {

    let sol = <BsSun id="sol"/>;
    let luna =  <BsMoon id="luna"/>

    const [position, setPosition] = useState(false);

    const changeMode = () => {
        if (props.theme === 'light') {
            props.setTheme('dark');
            changePosition();
        } else {
            props.setTheme('light');
            changePosition();
        }
    }

    const changePosition = () => {
        setPosition(!position);
    };

    return (
        <>
            <SwitchContiner>
                <SwitchWrapper>
                    <SwitchBGC>
                    {sol}
                        <ButtonSwitch 
                            onClick={() => changeMode()}
                            position={position}    
                        ></ButtonSwitch>
                    {luna}
                    </SwitchBGC>
                </SwitchWrapper>
            </SwitchContiner>
        </>
    )
};

export default Switch; 