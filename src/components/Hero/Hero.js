import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          E . S Yeboah <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText> 
          I am a Frontend developer with years of working experience. I've implemented designs and built products for the most used fintech application in Ghana, expressPay to achieve over 500,000 + downloads across US, UK and Ghana. I’ve gained extensive experience in designing useful and intuitive user interfaces, programming, testing, and debugging processes. I have worked on a number of projects from conceptualisation to completion. I take pride in coding to consistently high standards and regularly love to refresh my skills to ensure that I am up to speed with emerging technologies. I have a strong desire for mastery and it keeps me constantly learning.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
