import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from './components/utils/paginaError';
import { HomeMain } from './components/HomeMain';
import { NavBar } from './components/NavBar';

function App() {
    return (
        <BrowserRouter basename="/mejoravit-1-1.0">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeMain />} />
                <Route path="/Precalificar" element={<HomeMain />} />
                <Route path="/InformacionDelCrédito" element={<HomeMain />} />
                <Route path="/InformaciónAdicional" element={<HomeMain />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
