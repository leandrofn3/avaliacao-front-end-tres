import React from 'react';
import { WrapperContent } from '../../components/WrapperContent';
import BannerImage from '../../components/BannerImage';
import { ContainerForm } from '../../components/ContainerForm';
import { Form } from '../../components/Form';

function Signup() {
    return (
        <React.Fragment>
            <WrapperContent>
                <BannerImage />
                <ContainerForm>
                    <Form mode='signup'/>
                </ContainerForm>
            </WrapperContent>
        </React.Fragment>
    );
};

export default Signup;