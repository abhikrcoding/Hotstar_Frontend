import logo from './logo.svg';
import './App.css';
import Newnavbar from './Components/Newnavbar';
import Carousel from './Components/Carousel';
import MovieItems from './Components/MovieItems';
import Cards from './Components/Cards';


function App() {
  return (
    <div  style={{backgroundColor:"#0c0029"}} >
    <Newnavbar/>
     <div className='container fluid '>
    <Carousel/>
    </div> 
  <Cards></Cards>
    
    {/* <MovieItems movietype="Letest & Trending"></MovieItems>
    <MovieItems movietype="Action"></MovieItems>
    <MovieItems movietype="sports"></MovieItems> */}
    
   
   

    
    </div>
  );
}

export default App;
