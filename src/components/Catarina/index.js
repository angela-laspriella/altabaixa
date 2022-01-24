import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Images de slider que era uma animacao

import a1 from "../../images/Catarina/a1.png";
import a2 from "../../images/Catarina/a2.png";
import a3 from "../../images/Catarina/a3.png";
import a4 from "../../images/Catarina/a4.png";
import a5 from "../../images/Catarina/a5.png";
import a6 from "../../images/Catarina/a6.png";

// Images do primeiro slider da catarina

import aa1 from "../../images/Catarina/aa1.png";
import aa2 from "../../images/Catarina/aa2.png";
import aa3 from "../../images/Catarina/aa3.png";
import aa4 from "../../images/Catarina/aa4.png";
import aa5 from "../../images/Catarina/aa5.png";

// Images positivos

import pos1 from "../../images/Catarina/pos1.png";
import pos2 from "../../images/Catarina/pos2.png";
import pos3 from "../../images/Catarina/pos3.png";
import pos4 from "../../images/Catarina/pos4.png";

// Images negativos

import neg1 from "../../images/Catarina/ng1.png";
import neg2 from "../../images/Catarina/ng2.png";
import neg3 from "../../images/Catarina/ng3.png";
import neg4 from "../../images/Catarina/ng4.png";

import {
  MainContainer,
  Title,
  Name,
  Intro,
  Text,
  ImageContainer,
  OtherContainer,
  ImgOtherContainer,
  IntroContainer,
  SmallTitle,
  SmallText,
  SmallContainer,
  SliderContainer,
  SliderContainerF,
  OtherContainerParts,
} from "./CatarinaElements";

import { Catarina, CatarinaTexto } from "../../data/dataCatarina";

const CatarinaSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // Positivo -------------------

  //  Isto é o array de img
  const PosA = [pos1, pos2, pos3, pos4];

  // Isto é o intervalo e onde muda a imagem
  const [currentIndexPos, setCurrentIndexPos] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndexPos((prevIndex) =>
        currentIndexPos == PosA.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndexPos]); // Isto aqui reinicia o loop por alguma razao

  // Negativo -------------------

  //  Isto é o array de img
  const NegA = [neg1, neg2, neg3, neg4];

  // Isto é o intervalo e onde muda a imagem
  const [currentIndexNeg, setCurrentIndexNeg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndexNeg((prevIndex) =>
        currentIndexNeg == NegA.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(timer);
  }, [currentIndexNeg]); // Isto aqui reinicia o loop por alguma razao

  return (
    <MainContainer>
      {Catarina.map((item) => {
        return (
          <>
            <img src={item.img} />
            <Title>{item.text}</Title>
            <IntroContainer>
              <div>
                <Name>{item.name}</Name>
                <Intro>{item.intro}</Intro>
              </div>
              <div>
                <img src={item.img2} />
              </div>
            </IntroContainer>
          </>
        );
      })}
      {CatarinaTexto.map((item) => {
        return (
          <>
            <ImageContainer>
              <img src={item.img} />
            </ImageContainer>

            <OtherContainer row={item.false}>
              <Text>{item.text}</Text>

              <ImgOtherContainer
                margin={item.margin}
                row={item.row}
                small={item.small}
                showImage={item.showImage}
              >
                <img src={item.img2} />
                <SmallContainer>
                  <div>
                    <SmallTitle>{item.smalltitle}</SmallTitle>
                    <SmallText>{item.smalltext}</SmallText>
                  </div>
                  <div>
                    <SmallTitle>{item.smalltitle2}</SmallTitle>
                    <SmallText>{item.smalltext2}</SmallText>
                  </div>
                </SmallContainer>
              </ImgOtherContainer>

              <OtherContainerParts showSliderO={item.showSliderO}>
                <ImgOtherContainer
                  margin={item.margin}
                  row={item.row}
                  small={item.small}
                >
                  <img src={PosA[currentIndexPos]} />
                  <SmallContainer>
                    <div>
                      <SmallTitle>{item.smalltitle}</SmallTitle>
                      <SmallText>{item.smalltext}</SmallText>
                    </div>
                  </SmallContainer>
                </ImgOtherContainer>
                <Text>{item.text2}</Text>

                <ImgOtherContainer
                  margin={item.margin}
                  row={item.row}
                  small={item.small}
                >
                  <img src={NegA[currentIndexNeg]} />
                  <SmallContainer>
                    <div>
                      <SmallTitle>{item.smalltitle2}</SmallTitle>
                      <SmallText>{item.smalltext2}</SmallText>
                    </div>
                  </SmallContainer>
                </ImgOtherContainer>
                <Text>{item.text3}</Text>
              </OtherContainerParts>

              {/* Primeiro slider */}

              <SliderContainerF showSliderF={item.showSliderF}>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  keyBoardControl={true}
                  customTransition="all .005"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  arrows={false}
                  renderButtonGroupOutside={true}
                >
                  <img src={aa1} />
                  <img src={aa2} />
                  <img src={aa3} />
                  <img src={aa4} />
                  <img src={aa5} />
                </Carousel>
                <SmallContainer>
                  <div>
                    <SmallTitle>{item.smalltitle}</SmallTitle>
                    <SmallText>{item.smalltext}</SmallText>
                  </div>
                </SmallContainer>
              </SliderContainerF>

              {/* Segundo slider */}

              <SliderContainer showSlider={item.showSlider}>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  keyBoardControl={true}
                  customTransition="all .005"
                  transitionDuration={0.5}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  arrows={false}
                  renderButtonGroupOutside={true}
                >
                  <img src={a1} />
                  <img src={a2} />
                  <img src={a3} />
                  <img src={a4} />
                  <img src={a5} />
                  <img src={a6} />
                </Carousel>
                <SmallContainer>
                  <div>
                    <SmallTitle>{item.smalltitle}</SmallTitle>
                    <SmallText>{item.smalltext}</SmallText>
                  </div>
                </SmallContainer>
              </SliderContainer>
            </OtherContainer>
          </>
        );
      })}
    </MainContainer>
  );
};

export default CatarinaSection;
