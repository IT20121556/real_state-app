import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"x-rapidapi-host": "bayut.p.rapidapi.com",
			"x-rapidapi-key": "628024387emsh1178557f3e63756p123243jsn2abedf976114",
		},
	});

	return data;
};
