import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
	width: 32px;
	height: 32px;

	& > img {
		width: 32px;
		height: 32px;
	}

	&:hover {
		filter: invert(100%);
	}
`;


export function IconLink(props) {
	const { src = '', to = '' } = props; 
	return (
		<Wrapper href={to}>
			<img src={src} alt={to} />
		</Wrapper>
	);
}
