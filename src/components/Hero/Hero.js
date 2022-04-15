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
          I am a self-taught Frontend developer with a background in sales. I’ve
          gained extensive experience in building useful and intuitive user
          interfaces, programming, testing, and debugging processes. I have
          worked on a number of projects from conceptualization to completion.
          I'm currently the lead Frontend developer for the Government of
          Ghana's website. I take pride in coding to consistently high standards
          and regularly love to refresh my skills to ensure that I am up to
          speed with emerging technologies.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
