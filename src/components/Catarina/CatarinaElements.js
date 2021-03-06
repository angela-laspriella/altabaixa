import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;

  background-color: #f9f8f8;
  background: linear-gradient(90deg, #e86028 0%, rgba(232, 96, 40, 0) 27.56%);
`;

export const Title = styled.h2`
  font-family: nazare, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 900%;

  color: black;
`;

export const Name = styled.p`
  font-family: artigo, serif;
  font-weight: 200;
  font-style: normal;
  font-size: 500%;

  color: black;

  margin-top: 2%;
  margin-left: 4%;
`;

export const Intro = styled.p`
  font-family: artigo, serif;
  font-weight: 200;
  font-style: normal;
  font-size: 300%;

  color: black;

  margin-top: 4%;
  padding-left: 4%;
`;

export const OtherContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${({ row }) => (row ? "column" : "row")};
`;

export const SmallContainer = styled.div``;

export const ImgOtherContainer = styled.div`
  margin: auto;
  margin-top: ${({ margin }) => (margin ? "2%" : "0")};

  display: ${({ showImage }) => (showImage ? "none" : "flex")};

  flex-direction: ${({ row }) => (row ? "column" : "row")};

  img {
    /* mix-blend-mode: darken; */
    width: 100%;
    max-width: ${({ small }) => (small ? "400px" : "200px")};
    height: auto;

    margin-right: 2%;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div:first-child {
    width: 70%;
  }

  div:last-child {
    width: 30%;
  }

  img {
    float: right;
    padding-right: 15%;

    width: 40%;
  }
`;

export const Text = styled.p`
  font-family: artigo, serif;
  font-weight: 200;
  font-style: normal;
  font-size: 200%;

  color: black;

  width: 60%;

  margin-top: 4%;
  padding-left: 4%;
`;

export const ImageContainer = styled.div`
  width: 100%;

  img {
    margin-top: 8%;
    width: 100%;
  }
`;

export const SmallTitle = styled.p`
  font-family: artigo, serif;
  font-weight: 700;
  font-style: normal;
  font-size: 100%;

  margin-top: 4%;
`;

export const SmallText = styled.p`
  width: 300px;

  font-family: artigo, serif;
  font-weight: 200;
  font-style: normal;
  font-size: 100%;
`;

export const SliderContainer = styled.div`
  display: ${({ showSlider }) => (showSlider ? "block" : "none")};
  width: 250px;

  margin: ${({ margin }) => (margin ? "2%" : "auto")};

  img {
    width: 90%;
    height: auto;
    margin: auto;
  }
`;

export const SliderContainerF = styled.div`
  display: ${({ showSliderF }) => (showSliderF ? "block" : "none")};
  width: 250px;

  margin: ${({ margin }) => (margin ? "2%" : "auto")};

  img {
    width: 100%;
  }
`;

export const OtherContainerParts = styled.div`
  display: ${({ showSliderO }) => (showSliderO ? "block" : "none")};
  width: 100%;
  margin: ${({ margin }) => (margin ? "2%" : "auto")};

  img {
    width: 100%;
    margin-left: 30%;
  }
`;

export const ImgOtherGridContainer = styled.div`
  margin: auto;
  margin-top: ${({ margin }) => (margin ? "2%" : "0")};

  display: ${({ showGrid }) => (showGrid ? "flex" : "none")};

  flex-direction: ${({ row }) => (row ? "column" : "row")};
`;

export const GridImage = styled.div`
  width: 424px;
  display: flex;
  flex-wrap: wrap;

  margin-right: 40px;

  margin-bottom: 8%;

  gap: 24px;

  img {
    width: 200px;
    height: auto;

    filter: drop-shadow(8px 8px 8px rgba(166, 71, 34, 0.4));
  }
`;
