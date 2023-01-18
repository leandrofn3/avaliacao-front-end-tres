import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography, AppBar, Toolbar, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TableHead } from '@mui/material';
import { ContainerHome, ContainerInputsHome, ContainerTabela } from '../../components/WrapperContent';
import { InputHome } from '../../components/InputsHome';
import {User, Recado} from '../../components/Form'
import { Name } from '../../components/InputDefault';
import { v4 as uuid} from 'uuid';
import ModalHome from '../../components/Modal';

function Home() {
    const navigate = useNavigate();
    const [userLogged, setUserLogged] = useState<User | null>(JSON.parse(localStorage.getItem('usuarioLogado') ?? 'null'));
    const [description, setDescription] = useState('')
    const [detail, setDetail] = useState('')
    const [indiceExcluir, setIndiceExcluir] = useState(-1)
    const [openModal, setOpenModal] = useState(false)

    useEffect(
        () => {

            if (!userLogged) {
                navigate('/')
            }
        },
        [navigate, userLogged, userLogged?.recados]
    );

    const mudarInputHome = (value: string, key: Name) => {
        switch (key) {
            case 'description':
                setDescription(value);
                break;

            case "detail":
                setDetail(value);
                break;

                default:
        }
    };
    const handlerSaveAndLogout = () => {
        console.log('SAVE AND LOGOUT')
    }

    const handleEditar = (indice: number) => {
        console.log('clicou em id', indice);
    }

    const handleDeletar = (indice: number) => {
        setIndiceExcluir(indice);
        setOpenModal(true);
    }

    const handleSaveRecado = () => {
        const novoRecedo: Recado = {
            id: uuid(),
            description,
            detail,
        }
        if(userLogged) {
            setUserLogged({...userLogged, recados: [...userLogged?.recados, novoRecedo]})
            handleClear()
        }    
    }

    const handleClear = ()=> {
        setDescription('')
        setDetail('')
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <ContainerHome>
            <Grid sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            HELLOW, {userLogged?.name}
                        </Typography>
                        <Button variant="outlined" color="inherit" onClick={handlerSaveAndLogout}>Sair</Button>
                    </Toolbar>
                </AppBar>
            </Grid>
            <ContainerInputsHome>
                <Grid style={{ display: 'flex', width: 600 }} >
                    <InputHome type='text' name='description' label='Descrição' value={description} handleHome={mudarInputHome} />
                </Grid>
                <Grid style={{ display: 'flex', width: 600 }}  >
                    <InputHome type='text' name='detail' label='Detalhamento' value={detail} handleHome={mudarInputHome} />
                </Grid>
                <Grid style={{ display: 'flex', width: 60 }}  >
                    <Button variant="contained" onClick={handleSaveRecado}>SALVAR</Button>
                </Grid>
            </ContainerInputsHome>
            <ContainerTabela>
                <TableContainer component={Paper} style={{ display: 'flex', width: 1300, }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" >#</TableCell>
                                <TableCell align="center" >DESCRIÇÃO</TableCell>
                                <TableCell align="center" >DETALHAMENTO</TableCell>
                                <TableCell align="center" >AÇÃO</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userLogged?.recados.map((row, index) =>
                                <TableRow key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="center">{row.description}</TableCell>
                                    <TableCell align="center">{row.detail}</TableCell>
                                    <TableCell> <Button variant="contained" color="error" style={{ margin: 3 }} onClick={() => handleDeletar(index)} >APAGAR</Button>
                                                <Button variant="contained" color="success" onClick={() => handleEditar(index)}>EDITAR</Button> </TableCell>
                                </TableRow >
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ContainerTabela>
            <ModalHome indice={indiceExcluir} open={openModal} handleClose={handleCloseModal} user={userLogged as User} setUser={setUserLogged} />
        </ContainerHome>
    );
}

export { Home }
