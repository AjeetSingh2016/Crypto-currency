export const searchOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '734c98e533mshac21f9ea978fbbfp1b7b89jsnf6b8b2ba7dd1',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};


export const fetchData = async(url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}