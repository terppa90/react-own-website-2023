import React from 'react';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubtext,
} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>Feel Free to Contact Me</FooterSubHeading>
        <FooterSubtext>teromese@hotmail.com</FooterSubtext>
      </FooterSubscription>
    </FooterContainer>
  );
};

export default Footer;
