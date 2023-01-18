import React from 'react';
import BannerImage from '../../components/BannerImage';
import { WrapperContent } from '../../components/WrapperContent';
import { ContainerForm } from '../../components/ContainerForm';
import { Form } from '../../components/Form';

function Login() {
    return (
        <React.Fragment>
            <WrapperContent>
                <BannerImage />
                <ContainerForm>
                    <Form mode='login'/>
                </ContainerForm>
            </WrapperContent>
        </React.Fragment>
    );
}

export default Login;