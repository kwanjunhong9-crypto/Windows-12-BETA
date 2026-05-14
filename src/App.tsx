/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search, Grid, Layout, Bell, Wifi, Volume2, Battery, Calendar as CalendarIcon, Bluetooth, Shield, Zap, Moon } from 'lucide-react';
import { APPS, WALLPAPER_URL } from './constants';
import { AppID, WindowInstance } from './types';

// Components
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import WindowManager from './components/WindowManager';
import DesktopIcons from './components/DesktopIcons';

export default function App() {
  const [openWindows, setOpenWindows] = useState<WindowInstance[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [maxZIndex, setMaxZIndex] = useState(10);

  const openApp = useCallback((appId: AppID) => {
    const app = APPS.find(a => a.id === appId);
    if (!app) return;

    const newWindow: WindowInstance = {
      id: `${appId}-${Date.now()}`,
      appId,
      title: app.name,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      zIndex: maxZIndex + 1,
    };

    setOpenWindows(prev => [...prev, newWindow]);
    setActiveWindowId(newWindow.id);
    setMaxZIndex(prev => prev + 1);
    setIsStartOpen(false);
  }, [maxZIndex]);

  const closeWindow = useCallback((id: string) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  }, [activeWindowId]);

  const focusWindow = useCallback((id: string) => {
    setOpenWindows(prev => prev.map(w => 
      w.id === id ? { ...w, zIndex: maxZIndex + 1, isMinimized: false } : w
    ));
    setActiveWindowId(id);
    setMaxZIndex(prev => prev + 1);
  }, [maxZIndex]);

  const toggleMinimize = useCallback((id: string) => {
    setOpenWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
    ));
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden select-none">
      {/* Wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${WALLPAPER_URL})` }}
      />
      
      {/* Desktop Layer */}
      <div className="relative z-10 h-full w-full p-4 flex flex-col flex-wrap content-start gap-4"
           onClick={() => setIsStartOpen(false)}>
        <DesktopIcons onOpenApp={openApp} />
      </div>

      {/* Windows Layer */}
      <WindowManager 
        windows={openWindows}
        activeWindowId={activeWindowId}
        onClose={closeWindow}
        onFocus={focusWindow}
        onMinimize={toggleMinimize}
      />

      {/* Overlays (Start Menu, etc) */}
      <AnimatePresence>
        {isStartOpen && (
          <StartMenu onOpenApp={openApp} onClose={() => setIsStartOpen(false)} />
        )}
      </AnimatePresence>

      {/* Taskbar */}
      <Taskbar 
        openWindows={openWindows}
        activeWindowId={activeWindowId}
        onStartClick={() => setIsStartOpen(!isStartOpen)}
        onAppClick={(id) => focusWindow(id)}
        onOpenApp={openApp}
      />

      {/* Dark tint on top for deep contrast (optional) */}
      <div className="absolute inset-0 pointer-events-none bg-black/10 mix-blend-overlay" />
    </div>
  );
}

