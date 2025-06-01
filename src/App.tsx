import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  MapPin, 
  Search,
  Activity,
  Store,
  Hotel,
  ShoppingBag,
  Coffee,
  Car
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import PlacesSidebar from './components/PlacesSidebar';
import HomePage from './pages/HomePage';
import HealthPage from './pages/HealthPage';
import ChefchaouenPage from './pages/ChefchaouenPage';
import { ExplorationMode } from './types';

function App() {
  const [mode, setMode] = useState<ExplorationMode>('place');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPlacesSidebarOpen, setIsPlacesSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4">
            <div className="h-16 flex items-center justify-between gap-8">
              {/* Left section */}
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-2 rounded-md hover:bg-slate-50 transition-colors"
                >
                  <Activity size={22} className="text-slate-700" />
                </button>
              </div>

              {/* Center section */}
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">Place</span>
                <span className="text-2xl font-bold text-slate-800">2</span>
              </Link>

              {/* Right section */}
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setIsPlacesSidebarOpen(true)}
                  className="p-2 rounded-md hover:bg-slate-50 transition-colors"
                >
                  <MapPin size={22} className="text-slate-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white border-b border-slate-200 shadow-sm">
          <div className="container mx-auto">
            <nav className="flex justify-center py-2">
              <div className="flex space-x-6">
                <Link 
                  to="#"
                  className="flex items-center px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <MapPin size={20} className="mr-2" />
                  <span>Places</span>
                </Link>
                <Link 
                  to="#"
                  className="flex items-center px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Activity size={20} className="mr-2" />
                  <span>Activities</span>
                </Link>
                <Link 
                  to="#"
                  className="flex items-center px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Store size={20} className="mr-2" />
                  <span>Events</span>
                </Link>
                <Link 
                  to="#"
                  className="flex items-center px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Hotel size={20} className="mr-2" />
                  <span>Hotels</span>
                </Link>
                <Link 
                  to="#"
                  className="flex items-center px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <ShoppingBag size={20} className="mr-2" />
                  <span>Products</span>
                </Link>
                <Link 
                  to="#"
                  className="flex items-center px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Coffee size={20} className="mr-2" />
                  <span>Restaurants</span>
                </Link>
                <Link 
                  to="#"
                  className="flex items-center px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Car size={20} className="mr-2" />
                  <span>Transport</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>

        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        <PlacesSidebar
          isOpen={isPlacesSidebarOpen}
          onClose={() => setIsPlacesSidebarOpen(false)}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage mode={mode} />} />
            <Route path="/health" element={<HealthPage />} />
            <Route path="/africa/morocco/chefchaouen" element={<ChefchaouenPage />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-slate-200 py-4 px-6">
          <div className="container mx-auto flex items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Place2 © 2025</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;