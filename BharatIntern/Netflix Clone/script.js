const api="f53242fb4e31152d81e0d08171e3f81a";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

// url

const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;

// img url
const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w300"; 



// requests for movies data
const requests = {fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};


function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}

fetch(requests.fetchPopular)
 .then((res)=> res.json())

 .then((data)=>{
    
    
    const setMovie=
          data.results[Math.floor(Math.random()*data.results.length-1)];

    var banner=document.getElementById("banner");
    var banner_title =document.getElementById("banner-title");
    var banner_description =document.getElementById("banner-description");
 }
 )

 