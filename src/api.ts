//api에서 비동기를 사용하지 않은 이유는... 굳이 할 필요가 없었기 때문이 아닐까.
//이건 내 주관적 견해고 좀 더 조사가 필요할 것으로 보임.

export function fetchPrice(){
	return fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
		response.json()
	);
}

export function fetchCoins(){
	return fetch("https://api.coinpaprika.com/v1/ticker").then((response) =>
		response.json()
	);
}

// export async function fetchPrice(coinId: string){
// 	const response = await fetch("https://api.coinpaprika.com/v1/ticker/btc-bitcoin");
// 	const json = await response.json();
// 	return json;
// }