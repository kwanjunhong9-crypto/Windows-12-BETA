import { motion } from 'motion/react';
import { Search, Power, Settings as SettingsIcon, User } from 'lucide-react';
import { APPS } from '../constants';
import { AppID } from '../types';

interface StartMenuProps {
  onOpenApp: (appId: AppID) => void;
  onClose: () => void;
}

export default function StartMenu({ onOpenApp, onClose }: StartMenuProps) {
  return (
    <motion.div 
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 600, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed bottom-14 left-1/2 -translate-x-1/2 w-[600px] h-[640px] mica-dark rounded-xl z-[900] flex flex-col p-8 overflow-hidden"
    >
      {/* Search Header */}
      <div className="relative mb-8">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
          <Search size={18} />
        </div>
        <input 
          type="text" 
          placeholder="Type here to search" 
          className="w-full h-10 bg-black/30 border border-white/10 rounded-full pl-12 pr-4 text-sm text-white/90 focus:outline-none focus:border-sky-500/50 transition-colors"
          autoFocus
        />
      </div>

      {/* Pinned Section */}
      <div className="flex-1 overflow-y-auto pr-2">
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="text-white font-semibold text-sm">Pinned</h3>
          <button className="text-white/70 text-xs hover:bg-white/10 px-2 py-1 rounded transition-colors bg-white/5">
            All apps &gt;
          </button>
        </div>
        
        <div className="grid grid-cols-6 gap-y-6">
          {APPS.map(app => (
            <button 
              key={app.id} 
              onClick={() => onOpenApp(app.id)}
              className="flex flex-col items-center gap-2 group hover:bg-white/5 p-2 rounded-md transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center transition-transform group-active:scale-90">
                <app.icon size={32} color={app.color} />
              </div>
              <span className="text-[11px] text-white/90 text-center leading-tight">
                {app.name}
              </span>
            </button>
          ))}
        </div>

        {/* Recommended Section (Simplified) */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="text-white font-semibold text-sm">Recommended</h3>
            <button className="text-white/70 text-xs hover:bg-white/10 px-2 py-1 rounded transition-colors bg-white/5">
              More &gt;
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 px-2">
             {[
               { name: 'Get Started', time: 'Recently added' },
               { name: 'Latest Projects', time: '2 hours ago' },
               { name: 'Photos', time: 'Yesterday at 4:12 PM' },
               { name: 'Documents', time: 'Monday at 10:00 AM' }
             ].map((item, idx) => (
               <div key={idx} className="flex gap-3 items-center p-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors group">
                 <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white/60 group-hover:scale-105 transition-transform">
                   {item.name.includes('Photos') ? <SettingsIcon size={16} /> : <Search size={16} />}
                 </div>
                 <div className="flex flex-col">
                   <span className="text-sm text-white/90 font-medium">{item.name}</span>
                   <span className="text-[10px] text-white/50">{item.time}</span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="h-16 border-t border-white/5 mt-4 flex items-center justify-between px-2 bg-black/10 -mx-8 -mb-8">
        <div className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-md transition-colors cursor-pointer ml-6">
          <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center overflow-hidden">
            <User size={20} className="text-white" />
          </div>
          <span className="text-sm text-white font-medium">User Account</span>
        </div>
        
        <button className="win-button w-10 h-10 text-white/80 mr-6">
          <Power size={18} />
        </button>
      </div>
    </motion.div>
  );
}
