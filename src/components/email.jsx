import styled from 'styled-components'
import module from '../config.jsx'
import Side from '../components/side.jsx'

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`

const Email = () => (
 	<Side orientation="right">
      <StyledLinkWrapper>
        <a href={`mailto:${module.email}`}>{module.email}</a>
      </StyledLinkWrapper>
    </Side>
)

export default Email