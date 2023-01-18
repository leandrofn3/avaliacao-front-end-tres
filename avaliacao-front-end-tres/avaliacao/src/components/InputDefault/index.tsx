import React from "react";
import { TextField } from "@mui/material"

export interface InputDefaultProps {
    type: string;
    name: Name;
    label: string;
    value: string;
    color: 'error' | 'success';
    handleChange: (value: string, key: Name) => void;
}

export type Name = 'name' | 'email' | 'password' | 'repassword' | 'description' | 'detail'

function InputDefaul({ type, name, label, value, color, handleChange }: InputDefaultProps) {
    return (
        <TextField color={color} size='medium' focused fullWidth name={name} label={label} variant="outlined" 
        type={type} value={value} onChange={(ev) => handleChange(ev.target.value, name)} />
    );
}

export { InputDefaul}