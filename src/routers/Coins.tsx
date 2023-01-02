import React from 'react';
import styled from "styled-components";
import {useState, useEffect} from "react";
import HitItem from "../components/HitItem";
import Item from "../components/Item";
import {useRecoilState} from "recoil";
import {useQuery} from "react-query";
import {motion, useScroll, useAnimation} from "framer-motion";
import {BoxAtom} from "../atom";
import {fetchCoins, fetchPrice} from "../api";

const Base = styled.div`
	width:100%;
	height:300vh;
`;
const Header = styled.div`
	height: 100vh;
`;
const Title = styled(motion.header)`
	position: fixed;
	top: 0;
	
	display: flex;
	align-items: center;
	justify-content: flex-start;

	width: 100%;
	height: 10vh;
	color: ${props=>props.theme.black};
	font-size:50px;
	font-weight:bold;

	z-index: 2;
	h1{
	  margin-top: 10px;
	  margin-left:10px;
	}
`;
const SubTitle = styled.div`
	position: absolute;
	top:30vh;
	left:10vw;
	width:500px;
	color:white;
	font-size: 50px;
	font-weight:bold;
`;
const Video = styled.video`
	width: 100%;
	height: 100%;
	position: relative;
	z-index: -1;
	object-fit: cover;
`;
const Main1 = styled.div`
	height: 500px;
	width: 80%;
	margin: 0 auto 0 auto;
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;
const Main2 = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto 0 auto;
	flex-wrap: wrap;
	gap: 40px;
`;

interface ICoinsD{
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

interface IPriceD{
	price: number;
	volume_24h: number;
	volume_24h_change_24h: number;
	market_cap: number;
	market_cap_change_24h: number;
	percent_change_15m: number;
	percent_change_30m: number;
	percent_change_1h: number;
	percent_change_6h: number;
	percent_change_12h: number;
	percent_change_24h: number;
	percent_change_7d: number;
	percent_change_30d: number;
	percent_change_1y: number;
	ath_price: number;
	ath_date: string;
	percent_from_price_ath: number;
}

function Coins(){
	const {scrollY} = useScroll();
	const titleAnimation = useAnimation();
	const titleH1Animation = useAnimation();
	const {data:coinsD} = useQuery<ICoinsD[]>("coinsD", fetchCoins);
	const {data:priceD} = useQuery<IPriceD[]>("priceD", fetchPrice);
	useEffect(()=>{
		scrollY.onChange((scroll)=>{
			if(scroll > 300){
			titleAnimation.start({opacity:1, background:"rgba(0,0,0,1)"});
			titleH1Animation.start({scale:1, rotateY:1080});
			}else{
				titleAnimation.start({opacity:0, background:"rgba(0,0,0,0)"});
				titleH1Animation.start({scale:0.2, rotateY:1080});
			}
		})
	},[])
	return(
		<Base>
			<Header>
				<Video autoPlay loop>
				  <source src="0.mp4" type="video/mp4"/>
				</Video>
				<Title initial={{opacity:0, background:"rgba(0,0,0,0)"}} animate={titleAnimation} transition={{type:"linear"}}>
				  <motion.h1 animate={titleH1Animation} transition={{type:"linear"}}>코인나라</motion.h1>
				</Title>
				<SubTitle><p>세상의 모든 암호화폐</p></SubTitle>
			</Header>
			<Main2>
				{coinsD?.slice(0,100).map((item)=><Item 
													name={item?.name}
													key={item.id}
													percent_24h={item.percent_change_24h} 
													percent_1h={item.percent_change_1h} 
													rank={item.rank}
													last_updated={item.last_updated} 
													volume={item.volume_24h_usd} 
													market_cap={item.market_cap_usd}
													percent_7d={item.percent_change_7d}
													symbol={item.symbol}
												/>)}
			</Main2>
		</Base>
	);
}

export default Coins;