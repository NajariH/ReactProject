import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Contact from './components/Contact/Contact';
import ThemeToggle from './ThemeToggle';
import logo from './images/logo.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
    return (
        <Router>
                    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <header className=" flex justify-between items-center"> 
                     {/* p-4 flex justify-between items-center */}
                    <ThemeToggle />
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Logo" className="h-10 mr-2" /> 
                        <span className="text-xl font-bold">Catalogue de Films</span>
                        </Link>
                </header>

                <p>Conflit yossra </p>

                <main className="p-0">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/theme-toggle" element={<ThemeToggle />} />
            
            </Routes>
            </main>
            </div>
        </Router>
    );
}

export default App;
