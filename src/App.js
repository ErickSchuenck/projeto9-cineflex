import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import SelectMovieScreen from './SelectMovieScreen'
import SelectTimeScreen from './SelectTimeScreen'
import SelectSeatScreen from './SelectSeatScreen'
import ConfirmScreen from './ConfirmScreen'


function App() {

  const [movieName, setMovieName] = useState('')
  const [userData, setUserData] = useState({})

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectMovieScreen />} />
        <Route path="/SelectTimeScreen/:movieId" element={<SelectTimeScreen />} />
        <Route path="/SelectSeatScreen/:daysId" element={<SelectSeatScreen
          userData={userData}
          setUserData={setUserData}
          movieName={movieName}
          setMovieName={setMovieName}
        />} />
        <Route path="/ConfirmScreen/sucesso" element={<ConfirmScreen
          userData={userData}
          movieName={movieName}
        />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
