import {useEffect} from "react";


const API_URL = "http://www.omdbapi.com?apikey=34e0b80c";
const App =() => {

    const searchMovies = async (title) => { //async means it takes some times before it retrieves the data
    const response = await fetch("${API_URL}&s=${title}"); //gets to call the API

    const data = await response.json();

    console.log(data.Search);

    }
    useEffect(() => {
        searchMovies('superman')
    }, {});

    return(
        <h1>app</h1>
    )
}

export default App;