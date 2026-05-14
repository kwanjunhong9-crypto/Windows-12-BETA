import { motion } from 'motion/react';
import { Search, Layout, Wifi, Volume2, Battery, Calendar as CalendarIcon } from 'lucide-react';
import { APPS } from '../constants';
import { AppID, WindowInstance } from '../types';
import { useState, useEffect } from 'react';

interface TaskbarProps {
  openWindows: WindowInstance[];
  activeWindowId: string | null;
  onStartClick: () => void;
  onAppClick: (id: string) => void;
  onOpenApp: (appId: AppID) => void;
}

export default function Taskbar({ 
  openWindows, 
  activeWindowId, 
  onStartClick, 
  onAppClick,
  onOpenApp 
}: TaskbarProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pinnedApps = APPS.filter(app => ['chrome', 'explorer', 'store'].includes(app.id));

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 flex items-center justify-between px-2 z-[999] win-taskbar-dark">
      {/* Search / Widgets (Mobile style left) */}
      <div className="flex-1 hidden md:flex items-center gap-1">
        <button className="win-button w-10 h-10 text-white/80">
          <Layout size={18} />
        </button>
      </div>

      {/* Main Apps Icons (Centered) */}
      <div className="flex-1 flex items-center justify-center gap-1">
        {/* Start Button */}
        <button 
          onClick={onStartClick}
          className="win-button w-10 h-10 group"
          title="Start"
        >
          <div className="relative w-6 h-6 group-hover:scale-110 transition-transform duration-200">
            {/* Recreating the modern colorful logo with SVG-like divs */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-sm shadow-sm opacity-90 transform -translate-x-0.5" />
            <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-sm shadow-sm opacity-90 transform translate-y-0.5" />
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-400 rounded-sm shadow-sm opacity-90" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-sm shadow-sm opacity-90 transform -translate-y-0.5 translate-x-0.5" />
          </div>
        </button>

        <button className="win-button w-10 h-10 text-white/80">
          <Search size={20} />
        </button>

        {/* Pinned Apps */}
        {pinnedApps.map(app => (
          <button 
             key={app.id} 
             onClick={() => onOpenApp(app.id)}
             className="win-button w-10 h-10 relative group"
          >
            <app.icon size={22} color={app.color} className="group-hover:scale-110 transition-transform duration-200" />
          </button>
        ))}

        {/* Open Apps Indicators */}
        {openWindows.map(window => {
          const app = APPS.find(a => a.id === window.appId);
          if (!app) return null;
          const isActive = activeWindowId === window.id;

          return (
            <button 
              key={window.id}
              onClick={() => onAppClick(window.id)}
              className={`win-button w-10 h-10 relative group ${isActive ? 'bg-white/10' : ''}`}
            >
              <app.icon size={22} color={app.color} />
              <div className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-1 rounded-full bg-white transition-all duration-300 ${isActive ? 'w-4' : 'w-1 bg-white/40'}`} />
            </button>
          );
        })}
      </div>

      {/* System Tray */}
      <div className="flex-1 flex items-center justify-end gap-1 text-white/90 text-xs font-medium">
        <div className="flex items-center gap-3 px-2 h-10 hover:bg-white/10 rounded-md transition-colors cursor-pointer">
          <Wifi size={14} />
          <Volume2 size={14} />
          <Battery size={14} />
        </div>
        
        <div className="flex flex-col items-end px-2 h-10 justify-center hover:bg-white/10 rounded-md transition-colors cursor-pointer text-right">
          <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span>{time.toLocaleDateString([], { month: '2-digit', day: '2-digit', year: 'numeric' })}</span>
        </div>
        
        <div className="w-1.5 h-10 flex items-center justify-center border-l border-white/10 ml-1">
          <div className="w-px h-6 bg-white/10" />
        </div>
      </div>
    </div>
  );
}
