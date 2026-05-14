import { motion } from 'motion/react';
import { Search, Layout, Wifi, Volume2, Battery, Calendar as CalendarIcon } from 'lucide-react';
import { APPS, WindowsLogo } from '../constants';
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
      {/* Widgets (Left) */}
      <div className="flex-1 hidden md:flex items-center gap-1 pl-2">
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
          <WindowsLogo size={24} />
        </button>

        {/* Search Pill */}
        <div className="mx-1 h-9 rounded-full bg-white/10 hover:bg-white/15 transition-colors border border-white/5 flex items-center px-3 gap-2 cursor-text group min-w-[120px] lg:min-w-[180px]">
          <Search size={16} className="text-white/60 group-hover:text-white/90" />
          <span className="text-[11px] text-white/50 group-hover:text-white/80">Search</span>
        </div>

        {/* Pinned Apps */}
        {pinnedApps.map(app => (
          <button 
             key={app.id} 
             onClick={() => onOpenApp(app.id)}
             className="win-button w-10 h-10 relative group"
          >
            <app.icon size={26} color={app.color} className="group-hover:scale-110 transition-transform duration-200" />
          </button>
        ))}

        <div className="w-px h-6 bg-white/10 mx-1" />

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
              <app.icon size={26} color={app.color} />
              <div className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-sky-400 transition-all duration-300 ${isActive ? 'w-4 opacity-100' : 'w-1 opacity-40 hover:opacity-100'}`} />
            </button>
          )
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
