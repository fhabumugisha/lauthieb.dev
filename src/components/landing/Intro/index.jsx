import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hello! 👋</h1>
        <h4>I’m Laurent and I’m a Front-End Engineer!</h4>
        {/* <Button as={AnchorLink} href="#contact">
          Contact me
        </Button> */}
      </Details>
      <Thumbnail>
        <img src={dev} alt="Developer" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
