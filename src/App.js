import './App.css';
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

import Gallery from './components/Gallery';
import Home from './components/Home';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div className=''>
      
      <BrowserRouter>

      <Home />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path='/'  element={<Gallery setProgress= {setProgress} category="" />} />
        <Route  path='/science' element={<Gallery setProgress= {setProgress} category="science" />} />
        <Route  path='/computer' element={<Gallery setProgress= {setProgress} category="computer" />} />
        <Route path='/education' element={<Gallery setProgress= {setProgress} category="education" />} />
        <Route  path='/food' element={<Gallery setProgress= {setProgress} category="food" />} />
        <Route path='/sports' element={<Gallery setProgress= {setProgress} category="sports" />} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
