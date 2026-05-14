import { WindowInstance } from '../types';
import Window from './Window';

interface WindowManagerProps {
  windows: WindowInstance[];
  activeWindowId: string | null;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onMinimize: (id: string) => void;
}

export default function WindowManager({ 
  windows, 
  activeWindowId, 
  onClose, 
  onFocus, 
  onMinimize 
}: WindowManagerProps) {
  return (
    <>
      {windows.map(window => (
        <Window 
          key={window.id}
          window={window}
          isActive={activeWindowId === window.id}
          onClose={() => onClose(window.id)}
          onFocus={() => onFocus(window.id)}
          onMinimize={() => onMinimize(window.id)}
        />
      ))}
    </>
  );
}
