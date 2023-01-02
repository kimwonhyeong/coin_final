//float 개념 정리
//추가적인 css 정리하기

import React from 'react';
import styled from "styled-components";
import {motion, useMotionValue, useScroll, useTransform} from "framer-motion";

const Box = styled(motion.div)`
	width: 198px;
	height: 160px;
	border-radius: 15px;
	color: white;
	background:${props=>props.theme.gray};
	box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px, rgb(88 102 126 / 12%) 0px 1px 2px;
	
	padding:16px;
	margin-top:2px;
	margin-right:16px;
	
	cursor: pointer;
`;

const ImgDiv = styled.div`
	float: left;
`;

const Img = styled.img`
	width: 40px;
	height: 40px;
	margin-right: 10px;
`;

const Font = styled.div`
	display: block;
	float: left;
	width: calc(100% - 50px);
`;

const Name = styled(motion.div)`
	font-size: 15px;
	color: ${props=>props.theme.lightGray};
	text-overflow: ellipsis;
	overflow: hidden;
`;

const Price = styled.div`
	font-size: 16px;
	font-weight: 600;
	text-overflow: ellipsis;
	overflow: hidden;
	padding-top: 10px;
`;

const Change = styled.div`
	border-radius: 8px;
	font-weight: 600;
	padding: 3px 6px 3px 6px;
	
	line-height:12px;
	box-sizing: border-box;
	text-overflow: ellipsis;
	overflow: hidden;
	
	display: inline-block;
	
	
	font-size:12px;
	weight: 47px;
	height: 17px;
	margin-top: 8px;
	background-color: ${props=>props.theme.green};
	
`;

interface IProps{
	name: string;
	percent_7d: string;
	percent_24h: string; 
	percent_1h: string;
	rank: string;
	last_updated: string;
	volume: string;
	market_cap: string;
	symbol: string;
}

function Item(props:IProps){
	const { scrollYProgress } = useScroll();
	// const y = useMotionValue(0);
	// const rotateY = useTransform(y, [0,1080], [0,0.5]);
	return (
		<Box
			initial={{ opacity: 0, y: 30}}
  			whileInView={{ opacity: 1, y:0, transition:{duration:1} }}>
			<ImgDiv><Img src={`https://coinicons-api.vercel.app/api/icon/${props.symbol.toLowerCase()}`}/></ImgDiv>
			<Font>
				<Name>{props.name}</Name>
				<Price>10000$</Price>
				<Change>13.5%</Change>
			</Font>
		</Box>
	);
}

export default Item;

//props로 받으면 interface가 되고.
//구조 할당법으로 받으면 interface가 안 된다.!!!!!!

//link로 item을 감싸자.

//useEffect의 비동기에 관한 얘기는 그 자식들 간 적용되는 얘기일 뿐이다.