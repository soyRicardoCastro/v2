import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Nav from './nav.jsx'
import Social from './social.jsx'
import Email from './email.jsx'
import Footer from './footer.jsx'
import GlobalStyle from '../styles/GlobalStyle.jsx'
import theme from '../styles/theme.jsx'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
	const isHome = location.pathname === '/'

	const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  }

    useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0)}});

  return (
    <>
    	<ThemeProvider theme={theme}>
        <GlobalStyle />

        <a className="skip-to-content" href="#content">
            Skip to Content
        </a>

        <StyledContent>
          <Nav isHome={isHome} />
          <Social isHome={isHome} />
          <Email isHome={isHome} />

          <div id="content">
            {children}
          </div>
          <Footer />
        </StyledContent>
        </ThemeProvider>
    </>
  );
}

export default Layout