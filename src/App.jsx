
import './App.css';
import { useEffect,useState } from 'react';
import SearchBar from './Components/SearchBar';
import Gallery from './Components/Gallery';



function App() {
  let [search, setSearch] = useState ("")
  let [data, setData] = useState ([])
  let [message, setMessage]= useState("Search for music!")

  useEffect(()=> {
    document.title = `${search} Music`
   fetch("https://itunes.apple.com/search?term=The%20Grateful%20Dead") 
  .then(res => res.json())
  .then (resData => {
    if (resData.results.length >0){
      setData(resData.results)
    } else {
        setMessage("No results found!")
      }
    })
  },[search])

  return (
    <div className="App">
      <SearchBar />
      {message}
      <Gallery />
    
    </div>
  );
}

export default App;
