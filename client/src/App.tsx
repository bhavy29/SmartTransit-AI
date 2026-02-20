import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Optimize from './pages/Optimize';
import Results from './pages/Results';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <nav className="bg-white shadow-sm border-b px-6 py-4">
          <h1 className="text-xl font-bold text-slate-800">Smart Transit AI</h1>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/optimize" element={<Optimize />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
