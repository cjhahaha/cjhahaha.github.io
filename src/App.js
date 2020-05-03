import React from 'react';
import styled from 'styled-components';
import { Loading } from './components/Loading';
import { IconLink } from './components/IconLink';

const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  overflow-x: hidden;
`;

const IconWrapper = styled.div`
	display: flex;
	flex-direction: horizontal;
	align-items: center;
	justify-content: center;
	& > * {
		margin: 0 10px;
	}
`;

function App() {
  return (
    <AppWrapper>
	  <Loading />
	  <h1> <span>🚧</span> under construction </h1>

	  <IconWrapper>
		<p>Visit:</p>
		<IconLink to='https://blog.keyi-li.com' src={require('./assets/images/hexo.png')} />
		<IconLink to='https://github.com/cjhahaha' src={require('./assets/images/github.png')} />
	  </IconWrapper>

    </AppWrapper>
  );
}

export default App;
