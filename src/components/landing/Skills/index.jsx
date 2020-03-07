import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="Developer" />
      </Thumbnail>
      <Details>
        <h1>Want to know more?</h1>
        <p>
          Currently Technical Leader at Decathlon, I am thirsty for learning and sharing! Indeed, passionate about IT, I
          like to keep abreast of new developments in the field, whether technical or leisure. {'<I love={coding} />'}
        </p>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
