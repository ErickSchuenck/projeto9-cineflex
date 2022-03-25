import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectMovieScreen from './SelectMovieScreen'
import SelectTimeScreen from './SelectTimeScreen'
import SelectSeatScreen from './SelectSeatScreen'
import ConfirmScreen from './ConfirmScreen'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectMovieScreen />} />
        <Route path="/SelectTimeScreen" element={<SelectTimeScreen />} />
        <Route path="/SelectSeatScreen" element={<SelectSeatScreen />} />
        <Route path="/ConfirmScreen" element={<ConfirmScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
