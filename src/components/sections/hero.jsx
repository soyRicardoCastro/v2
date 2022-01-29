import styled from 'styled-components'

const StyledHeroSection = styled.section`
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 110px 0;

  @media (max-width: 480px) and (min-height: 700px) {
  	padding-top: 60px;
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--orange);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    margin-top: 50px;
  }
`;

const ButtonInfo = styled.a`
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
  margin: 25px 0 25px 0;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;
  border-radius: 10px;
  display: flex;
  width: 200px;
  justify-content: center;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;

  &:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
  }
`

const Hero = () => {

	const one = <h1>Hi, my name is</h1>
	  const two = <h2 className="big-heading-h2">Ricardo Castro,</h2>;
  const three = <h3 className="big-heading-h3"> Interactive FrontEnd Developer.</h3>;
  const four = (
    <>
      <p>
        I’m a junior front end developer stdiying
        digital experiences. Currently, I’m focused on make solutions for the web
        at{' '}
        <a href="#" target="_blank" rel="noreferrer">
          I dont know what goes here
        </a>
        .
      </p>
    </>
  );

  const five = (
    <ButtonInfo href="#">
    	hola
    </ButtonInfo>
  );

	const items = [one, two, three, four, five];

	return (
		<StyledHeroSection>
			{items.map((item, i) =>(
       	<div key={i}>{item}</div>
				))}
		</StyledHeroSection>
	)
}

export default Hero