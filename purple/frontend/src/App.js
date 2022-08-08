import { BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle';
import GlobalFont from './styles/GlobalFont';
import Home from './pages/home/Home';
import Searching from './pages/searching/Searching';
import Map from './pages/map/Map'; 
import Listing from './pages/listing/Listing';
import CurationDetail from './pages/curation/CurationDetail'; 
import React from 'react'; 

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/searching" element={<Searching/>} />
            <Route path="/map" element={<Map />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/curation/:id" element = {<CurationDetail/>} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
