import styled from "styled-components";
import Img1 from "../../assets/images/paisagem.jpg";

const BannerImage = styled.figure`
width: 70%;
height: 100%;
background-image: url(${Img1});
background-size: cover;
background-position: center;
`;

export default BannerImage;