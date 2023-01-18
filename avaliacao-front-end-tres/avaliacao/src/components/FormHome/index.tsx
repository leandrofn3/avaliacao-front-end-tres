import React from 'react';
import { InputHome } from '../InputsHome';
import { Button, Stack } from '@mui/material';
import { ContainerInputsHome } from '../WrapperContent';

function FormHome() {

    const MudarInputHome = () => { };

    return (
        <React.Fragment>
            <ContainerInputsHome>
                <Stack spacing={1} direction='row'  sx={{width: 500, maxWidth: '100%'}}>
                    <InputHome type='string' name='description' label='Descrição' value='descricao' handleHome={MudarInputHome}/>
                    <InputHome type='string' name='detail' label='Detalhamento' value='descricao' handleHome={MudarInputHome} />
                    <Button variant="contained" size="small">salvar</Button>
                </Stack>
            </ContainerInputsHome>
        </React.Fragment>
    );
}

export { FormHome }

