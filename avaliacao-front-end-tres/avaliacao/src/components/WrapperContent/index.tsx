import styled from "styled-components"

const WrapperContent = styled.main`
display: flex;
width: 100vw;
height: 100vh;
`;

const ContainerHome = styled.main`
display: flex;
flex-direction: column;

`;
const ContainerInputsHome = styled.section`
display: flex;
padding: 15px;
flex-direction: row;
gap: 20px;
align-items: center;
justify-content: center;
`;

const ContainerTabela = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 15px;

`

export { WrapperContent, ContainerHome, ContainerInputsHome, ContainerTabela };