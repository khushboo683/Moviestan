const API_KEY='5c0d522686debc8d15f6c47eed3685a6';
const IMAGE_URL='https://image.tmdb.org/t/p/w500';
const url='https://api.themoviedb.org/3/search/movie?api_key=5c0d522686debc8d15f6c47eed3685a6';


function generateUrl(path){
    const url=`https://api.themoviedb.org/3${path}?api_key=5c0d522686debc8d15f6c47eed3685a6`;
    return url;
    }

    function requestMovies(url,onComplete,onError)
    {
        fetch(url)
        .then((res)=>res.json())
        .then(onComplete)
        .catch(onError);
    
    }
    function searchMovie(value){
        const path='/search/movie';
        const url= generateUrl(path) + '&query=' + value;
        requestMovies(url,renderSearchMovies,handleError);
    }
   

    function getUpcomingMovies(){
        const path='/movie/upcoming';
        const url= generateUrl(path) ;
        const render =renderMovies.bind({ title: 'Upcoming Movies'});
        requestMovies(url,render,handleError);
    }

    function getTopRatedMovies(){
        const path='/movie/top_rated';
        const url= generateUrl(path) ;
        const render =renderMovies.bind({ title: 'Top Rated Movies'});
        requestMovies(url,render,handleError);
    }

    function getPopularMovies(){
        const path='/movie/popular';
        const url= generateUrl(path) ;
        const render =renderMovies.bind({ title: 'Popular Movies'});
        requestMovies(url,render,handleError);
    }