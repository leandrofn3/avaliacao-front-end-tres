import React from 'react';
import { TextField } from "@mui/material"
import { ContainerInputsHome } from '../WrapperContent';
import { Name } from '../InputDefault';



interface InputsHomeProps {
    type: string;
    name: Name;
    value: string;
    label: string;
    handleHome: (value: string, key: Name) => void;
}

function InputHome({ type, name, value, label, handleHome }: InputsHomeProps) {
    return (
        <ContainerInputsHome>
            <TextField focused fullWidth type={type} name={name} label={label} value={value} onChange={(ev) => handleHome(ev.target.value, name)} />
        </ContainerInputsHome>
    );
}

export {InputHome}