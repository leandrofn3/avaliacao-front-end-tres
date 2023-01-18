import React, { useState, useEffect } from "react";
import { Stack, Button, Box, Typography, } from "@mui/material";
import { InputDefaul } from "../InputDefault";
import { useNavigate } from "react-router-dom";
import { Name } from "../InputDefault";

interface FormProps {
    mode: 'login' | 'signup';
}

interface Recado {
    id: string;
    description: string;
    detail: string;
}

interface User {
    name: string;
    email: string;
    password: string;
    recados: Recado[];
}

function Form({ mode }: FormProps) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [listaUsuarios, setListaUsuarios] = useState<User[]>(JSON.parse(localStorage.getItem('listaUsers') ?? '[]'));

    const navigate = useNavigate()

    useEffect(
        () => {
            if (name.length < 3) {
                setErrorName(true);
            } else {
                setErrorName(false);
            }

            const regexEmail = /\S+@\S+\.\S+/;

            if (!email.match(regexEmail)) {
                setErrorEmail(true);
            } else {
                setErrorEmail(false);
            }

            if (mode === 'signup') {
                if (!password || !repassword || password.length < 8 || password !== repassword) {
                    setErrorPassword(true);
                } else {
                    setErrorPassword(false);
                }
            }

            if (mode === 'login') {
                if (!password) {
                    setErrorPassword(true);
                } else {
                    setErrorPassword(false);
                }
            }
        },
        [name, email, password, repassword]
    );

    useEffect(
        () => {
            localStorage.setItem('listaUsers', JSON.stringify(listaUsuarios))
        },
        [listaUsuarios]
    )

    const mudarInput = (value: string, key: Name) => {
        switch (key) {
            case 'name':
                setName(value);
                break;

            case "email":
                setEmail(value);
                break;

            case "password":
                setPassword(value);
                break;

            case "repassword":
                setRepassword(value);
                break;
        }
    }

    const handleNavigate = () => {
        if (mode === 'login') {
            navigate('/signup');
        } else { navigate('/'); }
    }

    const createAccount = () => {
        const newUser = {
            name,
            email,
            password,
            recados: []
        }

        const userExists = listaUsuarios.some((user) => user.email === newUser.email);

        if (!userExists) {
            setListaUsuarios((prev) => [...prev, newUser])
            clearInputs();
            alert("Usuário cadastrado com sucesso! Você será redirecionado!");

            setTimeout(() => {
                navigate('/')
            }, 1500)
        } else {
            alert('E-mail já em uso!')
        }
    }

    const Login = () => {
        const userExist = listaUsuarios.find((user) => user.email === email && user.password === password);

        if (!userExist) {
            const confirma = window.confirm('Usuário não cadastrado. Deseja cadrastar uma conta?')

            if (confirma) {
                navigate('/signup')
            }
        }

        localStorage.setItem('usuarioLogado', userExist?.email as string)

        alert('Login efetuado com sucesso! Redirecionando...')
        setTimeout(() => {
            navigate('/home')
        }, 1500)
    }


    const clearInputs = () => {
        setName('');
        setEmail('');
        setPassword('');
        setRepassword('');
    }

    return (
        <React.Fragment>
            <Stack direction='column' spacing={2} sx={{ width: '80%' }}>
                {mode === 'signup' && (

                    <React.Fragment>
                        <InputDefaul type='text' name='name' label='Nome' value={name} handleChange={mudarInput} color={errorName ? 'error' : 'success'} />
                        <InputDefaul type='email' name='email' label='E-mail' value={email} handleChange={mudarInput} color={errorEmail ? 'error' : 'success'} />
                        <InputDefaul type='password' name='password' label='Senha' value={password} handleChange={mudarInput} color={errorPassword ? 'error' : 'success'} />
                        <InputDefaul type='password' name='repassword' label='Repita a Senha' value={repassword} handleChange={mudarInput} color={errorPassword ? 'error' : 'success'} />
                        <Button disabled={errorName || errorEmail || errorPassword} variant='contained' color='success' onClick={createAccount} >Criar Conta</Button>
                    </React.Fragment>
                )}

                {mode === 'login' && (
                    <React.Fragment>
                        <InputDefaul type='email' name='email' label='E-mail' value={email} handleChange={mudarInput} color={errorEmail ? 'error' : 'success'} />
                        <InputDefaul type='password' name='password' label='Senha' value={password} handleChange={mudarInput} color={errorPassword ? 'error' : 'success'} />
                        <Button disabled={errorEmail || errorPassword} variant='contained' color='success' onClick={Login} >Acessar</Button>
                    </React.Fragment>
                )}
            </Stack>
            <Box>
                {mode === 'login' && (
                    <Typography variant="h6">Não tem conta?<Typography variant="caption" color="darkblue" onClick={handleNavigate}>Cadrastre-se</Typography> </Typography>
                )}

                {mode === 'signup' && (
                    <Typography variant="h6">Já tem conta?<Typography variant="caption" color="darkblue" onClick={handleNavigate}>Fazer login</Typography> </Typography>
                )}
            </Box>
        </React.Fragment>
    );
};


export { Form };
export type { User, Recado };
