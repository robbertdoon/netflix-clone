import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from './requests';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <Row
        category='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        // next line 'isLargeRow' will be read as 'isLargeRow={true}
        isLargeRow
      />
      {/* the requests.fetch... in the lines below correspond to the dynamic urls in requests.js */}
      <Row category='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row category='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row category='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row category='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row category='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row category='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row category='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
