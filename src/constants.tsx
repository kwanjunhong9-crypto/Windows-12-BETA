import { Folder, Globe, Settings, FileText, Terminal, ShoppingBag } from 'lucide-react';
import { AppConfig } from './types';

// Custom Icons to match Win11 style
const FileExplorerIcon = ({ size, color }: { size: number; color: string }) => (
  <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
    <div className="absolute inset-0 bg-yellow-400 rounded-sm shadow-sm" style={{ clipPath: 'polygon(0% 15%, 40% 15%, 50% 0%, 100% 0%, 100% 100%, 0% 100%)' }} />
    <div className="absolute bottom-1 w-2/3 h-1.5 bg-blue-600 rounded-sm" />
  </div>
);

const SettingsIconFull = ({ size, color }: { size: number; color: string }) => (
  <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
    <Settings size={size} color="#94a3b8" />
    <div className="absolute w-1/3 h-1/3 bg-blue-600 rounded-full border border-white/20" />
  </div>
);

const ChromeIcon = ({ size, color }: { size: number; color: string }) => (
  <div style={{ width: size, height: size }} className="relative flex items-center justify-center overflow-hidden rounded-full border border-white/10 shadow-sm">
    <div className="absolute top-0 left-0 w-full h-full bg-[#4285F4]" />
    <div className="absolute top-0 left-0 w-full h-1/2 bg-[#EA4335]" style={{ clipPath: 'polygon(50% 50%, 0% 0%, 100% 0%)' }} />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FBBC05]" style={{ clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%)' }} />
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#34A853]" style={{ clipPath: 'polygon(50% 50%, 0% 100%, 100% 100%)' }} />
    <div className="absolute w-1/2 h-1/2 bg-white rounded-full flex items-center justify-center">
      <div className="w-4/5 h-4/5 bg-[#4285F4] rounded-full" />
    </div>
  </div>
);

const StoreIcon = ({ size }: { size: number }) => (
  <div style={{ width: size, height: size }} className="relative flex flex-col items-center">
    {/* Handle */}
    <div className="w-1/2 h-1/4 border-2 border-sky-400/80 rounded-t-lg -mb-1" />
    {/* Bag body */}
    <div className="flex-1 w-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-sm flex items-center justify-center border border-white/10 p-2">
      <div className="grid grid-cols-2 gap-0.5 w-full h-full p-1 opacity-90">
        <div className="bg-[#f25022] rounded-sm" />
        <div className="bg-[#7fba00] rounded-sm" />
        <div className="bg-[#00a4ef] rounded-sm" />
        <div className="bg-[#ffb900] rounded-sm" />
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
