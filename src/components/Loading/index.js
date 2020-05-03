import React from 'react';
import styled, { keyframes } from 'styled-components';


const spinBG = keyframes`
	0%  {transform: rotate(0deg);}
	100%{transform: rotate(360deg);}
`;

const spinBG2 = keyframes`
	0%{
		transform: rotate(360deg);
		box-shadow: 0px 0px 1px rgba(23,246,251, 0.5);
	}
	50%{
		transform: rotate(180deg);
		box-shadow: 0px 0px 20px rgba(23,246,251, 0.5);
	}
	100%{
		transform: rotate(0deg);
		box-shadow: 0px 0px 1px rgba(23,246,251, 0.5);
	}
`;

const spinBG3 = keyframes`
	0%{
		transform: rotate(180deg);
		box-shadow: 0px 0px 1px rgba(23,246,251, 0.1);
	}
	50%{
		transform: rotate(0deg);
	}
	100%{
		transform: rotate(-180deg);
	}
`;


const LoadingWrapper = styled.ul`
	display: block;
	position: relative;
	width: 99vw;
	height: 400px;

	& > li {
		position: absolute;
		left: 50%;
		top: 50%;
		display: block;
		background: transparent;
		border: 10px solid rgba(23,246,251, 1.0);
		border-left-color: transparent;
		border-right-color: transparent;
		border-radius: 500px;
		transition: all 0.5s ease;

		&:last-child {
			position: absolute;
			left: 50%;
			top: 50%;
			z-index: 20;
			width: 200px;
			height: 100px;
			margin-left: -110px;
			margin-top: -110px;
			padding: 70px 0px 30px;
			background-color: transparent;
			border: 10px solid rgba(8,8,8,1.0);
			border-radius: 200px;
			text-shadow: 2px 2px 0px rgba(0,0,0,1);
			box-shadow: 0px 0px 30px rgba(23,246,251, 0.5);
			animation: pulseShadow 5s infinite linear;

			&:after {
				content:'';
				border: 3px dotted rgba(22,42,43,1.0);
				border-radius: 200px;
				width: 200px;
				height: 200px;
				display: block;
				position: absolute;
				top:-3px;
				left:-3px;
				background-color: transparent;
				box-shadow: inset 0px 0px 30px rgba(0,0,0,1.0);
			}
		}

		&:first-child {
			margin-left: -130px;
			margin-top: -130px;
			z-index: 2;
			width: 240px;
			height: 240px;
			border-width: 10px;
			animation: ${spinBG} 5s infinite linear;
		}

		&:nth-child(2) {
			margin-left: -137px;
			margin-top: -137px;
			z-index: 1;
			width: 270px;
			height: 270px;
			border-width: 2px;
			border-style: dotted;
			box-shadow: 0px 0px 20px rgba(23,246,251, .5);
			animation: ${spinBG2} 2s infinite linear;
		}

		&:nth-child(3) {
			margin-left: -150px;
			margin-top: -150px;
			z-index: 1;
			width: 296px;
			height: 296px;
			border-width: 2px;
			box-shadow: inset 0px 0px 25px rgba(23,246,251, .25);
			animation: ${spinBG} 12s infinite linear;
		}

		&:nth-child(4) {
			margin-left: -170px;
			margin-top: -170px;
			z-index: 1;
			width: 330px;
			height: 330px;
			border-width: 5px;
			border-style: solid;
			box-shadow: inset 0px 0px 25px rgba(23,246,251,1.0);
			animation: ${spinBG3} 8s infinite linear;
		}
	}
`;


export function Loading() {
	return (
		<LoadingWrapper>
		  <li />
		  <li />
		  <li />
		  <li />
		  <li />
		</LoadingWrapper>
	);
}
