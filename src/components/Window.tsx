import { motion } from 'motion/react';
import { X, Minus, Square, Maximize2 } from 'lucide-react';
import { WindowInstance } from '../types';
import { ReactNode, useMemo } from 'react';
import FileExplorer from './apps/FileExplorer';
import Chrome from './apps/Chrome';
import Settings from './apps/Settings';
import Notepad from './apps/Notepad';

interface WindowProps {
  window: WindowInstance;
  isActive: boolean;
  onClose: () => void;
  onFocus: () => void;
  onMinimize: () => void;
}

export default function Window({ 
  window, 
  isActive, 
  onClose, 
  onFocus, 
  onMinimize 
}: WindowProps) {
  const content = useMemo(() => {
    switch (window.appId) {
      case 'explorer': return <FileExplorer />;
      case 'chrome': return <Chrome />;
      case 'settings': return <Settings />;
      case 'notepad': return <Notepad />;
      default: return <div className="p-8 text-white">Coming soon...</div>;
    }
  }, [window.appId]);

  if (window.isMinimized) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragListener={true}
      dragControls={undefined}
      onPointerDown={onFocus}
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      style={{ zIndex: window.zIndex }}
      className={`fixed top-20 left-40 w-[800px] h-[500px] mica-dark win-window border border-white/20 flex flex-col ${isActive ? 'shadow-2xl ring-1 ring-white/10' : 'shadow-lg opacity-90'}`}
    >
      {/* Title Bar */}
      <div 
        className="h-10 flex items-center justify-between px-3 cursor-default select-none border-b border-white/5 bg-white/5 active:cursor-grabbing"
        onDoubleClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-white/80">{window.title}</span>
        </div>
        
        <div className="flex items-center">
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="w-10 h-8 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <Minus size={14} className="text-white/80" />
          </button>
          <button 
            className="w-10 h-8 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <Square size={12} className="text-white/80" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="w-10 h-8 flex items-center justify-center hover:bg-red-500 transition-colors group"
          >
            <X size={16} className="text-white/80 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden bg-black/20">
        {content}
      </div>
    </motion.div>
  );
}
