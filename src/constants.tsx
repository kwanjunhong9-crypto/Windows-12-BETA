import { Folder, Globe, Settings, FileText, Terminal, ShoppingBag } from 'lucide-react';
import { AppConfig } from './types';

// Custom Icons to match Win11 style
export const WindowsLogo = ({ size = 24 }: { size?: number }) => (
  <div style={{ width: size, height: size }} className="relative group-hover:scale-110 transition-transform duration-200">
    <div className="absolute top-0 left-0 w-[46%] h-[46%] bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm shadow-sm opacity-90 transform -translate-x-[10%] -translate-y-[5%] rotate-[-2deg]" />
    <div className="absolute top-0 right-0 w-[46%] h-[46%] bg-gradient-to-br from-indigo-600 to-blue-700 rounded-sm shadow-sm opacity-90 transform translate-x-[10%] translate-y-[5%] rotate-[2deg]" />
    <div className="absolute bottom-0 left-0 w-[46%] h-[46%] bg-gradient-to-br from-blue-600 to-blue-500 rounded-sm shadow-sm opacity-90 transform -translate-x-[5%] rotate-[-1deg]" />
    <div className="absolute bottom-0 right-0 w-[46%] h-[46%] bg-gradient-to-br from-sky-400 to-cyan-300 rounded-sm shadow-sm opacity-90 transform translate-x-[15%] -translate-y-[10%] rotate-[3deg]" />
  </div>
);

const FileExplorerIcon = ({ size }: { size: number }) => (
  <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
    <div className="absolute w-[90%] h-[75%] bg-yellow-400 rounded shadow-md border-t border-white/30" style={{ clipPath: 'polygon(0% 15%, 35% 15%, 45% 0%, 100% 0%, 100% 100%, 0% 100%)' }} />
    <div className="absolute w-[80%] h-[55%] bg-yellow-300/80 bottom-[15%] rounded-sm backdrop-blur-sm" />
    <div className="absolute bottom-[20%] w-[35%] h-[10%] bg-blue-500 rounded-sm opacity-90 shadow-sm" />
  </div>
);

const SettingsIconFull = ({ size }: { size: number }) => (
  <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
    <div className="w-full h-full bg-slate-400 rounded-full flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 61% 10%, 75% 10%, 80% 25%, 95% 30%, 95% 45%, 100% 50%, 95% 55%, 95% 70%, 80% 75%, 75% 90%, 61% 90%, 50% 100%, 39% 90%, 25% 90%, 20% 75%, 5% 70%, 5% 55%, 0% 50%, 5% 45%, 5% 30%, 20% 25%, 25% 10%, 39% 10%)' }}>
      <div className="w-[85%] h-[85%] bg-slate-500 rounded-full flex items-center justify-center">
        <div className="w-1/2 h-1/2 bg-blue-600 rounded-full border-2 border-white/30 shadow-inner" />
      </div>
    </div>
  </div>
);

const ChromeIcon = ({ size }: { size: number }) => (
  <div style={{ width: size, height: size }} className="relative flex items-center justify-center overflow-hidden rounded-full border border-white/10 shadow-sm">
    <div className="absolute top-0 left-0 w-full h-full bg-[#4285F4]" />
    <div className="absolute top-0 left-0 w-full h-1/2 bg-[#EA4335]" style={{ clipPath: 'polygon(50% 50%, 0% 0%, 100% 0%)' }} />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FBBC05]" style={{ clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%)' }} />
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#34A853]" style={{ clipPath: 'polygon(50% 50%, 0% 100%, 100% 100%)' }} />
    <div className="absolute w-[45%] h-[45%] bg-white rounded-full p-1">
      <div className="w-full h-full bg-[#4285F4] rounded-full shadow-inner" />
    </div>
  </div>
);

const StoreIcon = ({ size }: { size: number }) => (
  <div style={{ width: size, height: size }} className="relative flex flex-col items-center justify-center p-[10%]">
    <div className="w-1/2 h-1/4 border-2 border-sky-400/80 rounded-t-lg -mb-[2%]" />
    <div className="flex-1 w-full bg-gradient-to-br from-blue-600 to-blue-800 rounded shadow-md flex items-center justify-center border border-white/10 p-[15%]">
      <div className="grid grid-cols-2 gap-[5%] w-full h-full opacity-90">
        <div className="bg-[#f25022] rounded-sm transform hover:scale-110 transition-transform" />
        <div className="bg-[#7fba00] rounded-sm transform hover:scale-110 transition-transform" />
        <div className="bg-[#00a4ef] rounded-sm transform hover:scale-110 transition-transform" />
        <div className="bg-[#ffb900] rounded-sm transform hover:scale-110 transition-transform" />
      </div>
    </div>
  </div>
);

export const APPS: AppConfig[] = [
  { id: 'explorer', name: 'File Explorer', icon: FileExplorerIcon as any, color: '#facc15' },
  { id: 'chrome', name: 'Google Chrome', icon: ChromeIcon as any, color: '#4285F4' },
  { id: 'settings', name: 'Settings', icon: SettingsIconFull as any, color: '#64748b' },
  { id: 'notepad', name: 'Notepad', icon: FileText, color: '#334155' },
  { id: 'terminal', name: 'Terminal', icon: Terminal, color: '#000000' },
  { id: 'store', name: 'Microsoft Store', icon: StoreIcon as any, color: '#3b82f6' },
];

export const WALLPAPER_URL = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop";
