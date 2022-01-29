import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyle.jsx'
import Layout from './components/layout.jsx'


const StyledMainContainer = styled.main`
  counter-reset: section;
`

export default function App({ location }) {
  return(
  	<>
  	<Layout location={location}>
  	  <StyledMainContainer className="fillHeight">
  	  	<h1>hola</h1>
  	  </StyledMainContainer>
  	</Layout>
    </>
 )
}