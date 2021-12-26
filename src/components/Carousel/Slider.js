import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styles from "./Carousel.module.css";
import styled from "styled-components";

import img1 from "../../img/slide1.jpg";
import img2 from "../../img/slide2.jpg";
import img3 from "../../img/slide3.jpg";
import img4 from "../../img/slide4.jpg";
import img5 from "../../img/slide5.jpg";
import img6 from "../../img/slide6.jpg";
import img7 from "../../img/slide7.jpg";

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
  top: 0;
`;

const Button = styled.button`
  padding: 0.5em 2em;
  z-index: 33;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #9000ff;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const TOTAL_SLIDES = 6;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
        <Slide img={img5} />
        <Slide img={img6} />
        <Slide img={img7} />
      </SliderContainer>
      <div className={styles.slideButtonTool}>
        <Button onClick={prevSlide}>⇦</Button>
        <Button onClick={nextSlide}>⇨</Button>
      </div>
    </Container>
  );
}
