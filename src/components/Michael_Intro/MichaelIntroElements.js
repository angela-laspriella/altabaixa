import { getDefaultNormalizer } from "@testing-library/react";
import styled from "styled-components";
/*let oi = document.getElementsByClassName(".oi");
oi.style.backgroundColor = "#eb6029";*/
export const MainContainer = styled.div`
  width: 100vw;

  overflow: hidden;
  .oi {
    background-color: #f9f8f8;
  }
`;

export const Title = styled.h1`
  font-family: nazare, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1100%;
  line-height: 100%;
`;
export const Name = styled.h2`
  font-family: artigo, serif;
  font-weight: 300;
  font-style: italic;
  font-size: 600%;
  padding-top: 3%;
`;

export const SecondContainer = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  overflow-x: hidden;
`;

export const ImgContainer = styled.div`
  width: 24vw;

  img {
    width: 100%;
  }
`;

export const Text = styled.p`
  width: 41%;
  padding: 2% 1%;
  color: #f9f8f8;
  font-family: artigo, serif;
  font-weight: 300;
  font-style: normal;
  font-size: 145%;
`;
export const Break = styled.br``;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Title1 = styled.h2`
  font-family: nazare, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 425%;
  line-height: 100%;
  color: #f9f8f8;
`;

export const Title2 = styled.h2`
  font-family: nazare, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 711%;
  line-height: 100%;
  color: #1c1c1c;
  padding-bottom: 0;
  margin-bottom: 0;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #eb6029;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .color {
  }
  div {
    width: 600px;
  }

  padding-bottom: 4%;

  button {
    height: 24px;
    width: auto;

    background: rgba(0, 0, 0, 0);
    border: none;
    margin-right: 16px;

    img {
      height: 100%;
    }

    cursor: pointer;
  }

  .inactive {
    opacity: 0.5;
  }
`;

export const Coiso = styled.div`
  width: fit-content;
  height: fit-content;
  min-height: 585px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: -10%;

  img {
    height: 50%;
    max-height: 250px;
    opacity: 0.3;
  }

  @media screen and (max-width: 900px) {
    padding-left: 5%;
    img {
      max-height: 200px;
    }
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  z-index: 2;

  display: flex;
  flex-direction: column;
  padding-left: 40%;
  margin-bottom: 2%;

  @media screen and (max-width: 900px) {
    padding-left: 25%;
  }
`;

export const TitleSlider = styled.h3`
  color: white;
  width: 75%;

  font-family: nazare, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 400%;
  line-height: 115%;
`;

export const TextSlider = styled.p`
  color: white;
  width: 80%;

  font-family: artigo, serif;
  font-weight: 300;
  font-style: normal;
  font-size: 120%;

  margin-top: 4%;

  @media screen and (max-width: 900px) {
    font-size: 100%;
  }
`;
