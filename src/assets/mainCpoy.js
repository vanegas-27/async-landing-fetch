import fetch  from "node-fetch";

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCaY_-ksFSQtTGk0y1HA_3YQ&part=snippet%2Cid&order=date&maxResults=50';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cc23b94f14mshc07c5ea93680d08p1c1e25jsnfbb2d579bbb6',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}

};

async function fetchData(urlApi){
	const response = await fetch(urlApi,options);
	return response;
	// const items = await response.json()
	// return items;
};

fetchData(url)
.then(response => console.log(response))
.catch(err => console.error(err));