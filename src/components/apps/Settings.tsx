import { Monitor, Wifi, Bluetooth, AppWindow, Lock, User, Accessibility, Search, ShieldCheck, Zap } from 'lucide-react';

export default function Settings() {
  const menuItems = [
    { icon: Monitor, name: 'System', active: true },
    { icon: Bluetooth, name: 'Bluetooth & devices' },
    { icon: Wifi, name: 'Network & internet' },
    { icon: AppWindow, name: 'Personalization' },
    { icon: AppWindow, name: 'Apps' },
    { icon: User, name: 'Accounts' },
    { icon: Zap, name: 'Windows Update' },
  ];

  return (
    <div className="flex h-full bg-[#202020] text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/5 flex flex-col p-4 gap-1">
        <div className="flex items-center gap-3 px-3 py-4 mb-2">
           <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center">
             <User size={24} />
           </div>
           <div className="flex flex-col">
             <span className="text-sm font-semibold">User Account</span>
             <span className="text-[10px] text-white/50">Local Account</span>
           </div>
        </div>

        <div className="relative mb-4">
           <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
           <input 
             type="text" 
             placeholder="Find a setting" 
             className="w-full h-8 bg-black/20 border border-white/10 rounded px-9 text-[11px] outline-none focus:border-sky-500/50"
           />
        </div>

        {menuItems.map((item, idx) => (
          <div 
            key={idx} 
            className={`flex items-center gap-3 px-3 py-2 rounded text-xs cursor-pointer transition-colors ${item.active ? 'bg-white/10' : 'hover:bg-white/5'}`}
          >
            <item.icon size={16} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-2xl font-bold mb-8">System</h1>
        
        <div className="grid grid-cols-1 gap-2">
           {[
             { icon: Monitor, title: 'Display', desc: 'Monitors, brightness, night light, display profile' },
             { icon: Zap, title: 'Sound', desc: 'Volume levels, output devices, sound settings' },
             { icon: ShieldCheck, title: 'Notifications', desc: 'Alerts from apps and system' },
             { icon: Zap, title: 'Power & battery', desc: 'Sleep, battery usage, power mode' },
             { icon: HardDrive, name: 'Storage', desc: 'Storage space, cleanup recommendations' },
             { icon: AppWindow, name: 'Multitasking', desc: 'Title bar shake, snap windows' },
           ].map((card, idx) => (
             <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 cursor-pointer transition-colors group">
               <div className="w-10 h-10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                 <card.icon size={20} />
               </div>
               <div className="flex flex-col">
                 <span className="text-sm font-medium">{card.title || card.name}</span>
                 <span className="text-xs text-white/50">{card.desc}</span>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

// Minimal HardDrive icon placeholder as it was not imported
import { HardDrive } from 'lucide-react';
