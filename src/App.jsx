import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from './components/utils/ErrorPage';
import { HomeMain } from './components/HomeMain';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

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

            <Footer />
        </BrowserRouter>
    );
}

export default App;
