import styled from 'styled-components'
import Layout from '../components/layout.jsx'
import Hero from '../components/sections/hero.jsx'
import About from '../components/sections/about.jsx'
import Featured from '../components/sections/featured.jsx'

const StyledMainContainer = styled.main`
	counter-reset: section;
`

const IndexPage = ({ location }) => {
	return (
		<Layout location={location}>
			<StyledMainContainer className="fillHeight">
				<Hero/>
				<About/>
			</StyledMainContainer>
		</Layout>
	)
}

export default IndexPage