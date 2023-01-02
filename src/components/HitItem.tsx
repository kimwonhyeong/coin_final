import React from 'react';
import styled from "styled-components";
import {useEffect} from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {useQuery} from "react-query";
import {PChange24Atom} from "../atom";
import {fetchCoins, fetchPrice} from "../api";
import {motion, useMotionValue, useScroll, useTransform} from "framer-motion";

const Box = styled(motion.div)`
	width: 25%;
	height: 400px;
	border: solid;
	border-radius: 5%;
	background: black;
	color: white;
`;

// interface ICoinsD{
// 	id: string;
// 	name: string;
// 	symbol: string;
// 	rank: number;
// 	is_new: boolean;
// 	is_active: boolean;
// 	type: string;
// }

interface IPriceD{
	id: string;
	name: string;
	symbol: string;
	rank: string;
	price_usd:string;
	price_btc: string;
	volume_24h_usd: string;
	market_cap_usd: string;
	circulating_supply: string;
	total_supply: string;
	max_supply: string;
	percent_change_1h: string;
	percent_change_24h: string;
	percent_change_7d: string;
	last_updated: string;
}

function HitItem(){
	const { scrollYProgress } = useScroll();
	// const y = useMotionValue(0);
	// const rotateY = useTransform(y, [0,1080], [0,0.5]);
	// const {data} = useQuery<IPriceD[]>("priceD", fetchPrice);
	// const [pChange24,setPChange24] = useRecoilState(PChange24Atom);
	// useEffect(()=>{
	// 	setPChange24(data?.map(item=>[(item.percent_change_24h),item.id]));
	// },[data]);
	
	// console.log(pChange24);
	// const temparay = [...[pChange24]];
	// temparay?.sort((a:string[], b:string[]):string[][] => ((+b[0]) - (+a[0])));
	// console.log(temparay);
	
 	//useEffect(()=>{
 	//	temparay?.sort((a:string[], b:string[])=> (+b[0]) - (+a[0]));
 		//setPChange24(temparay);
 	//},[temparay]);
	//console.log(PChange24?.sort((a:string[], b:string[])=> (+b[0]) - (+a[0])));
	return (
		<Box
			initial={{ opacity: 0, y: 200}}
  			whileInView={{ opacity: 1, y:0, transition:{duration:1} }}>
			<h1>Hello</h1>
		</Box>
	);
}

export default HitItem;

//useEffect의 비동기에 관한 얘기는 그 자식들 간 적용되는 얘기일 뿐이다.