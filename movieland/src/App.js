import {useEffect} from "react";


const API_URL = "http://www.omdbapi.com?apikey=34e0b80c";
const App =() => {

    const searchMovies = async (title) => { //async means it takes some times before it retrieves the data
    const response = await fetch("${API_URL}&s=${title}");
    const data = await response.json();

    }
    useEffect(() => {
    }, {});

    return(
        <h1>app</h1>
    )
}

export default App;