import { APPS } from '../constants';
import { AppID } from '../types';

interface DesktopIconsProps {
  onOpenApp: (appId: AppID) => void;
}

export default function DesktopIcons({ onOpenApp }: DesktopIconsProps) {
  return (
    <>
      {APPS.map(app => (
        <button
          key={app.id}
          onDoubleClick={() => onOpenApp(app.id)}
          className="w-24 h-24 flex flex-col items-center justify-center gap-1 rounded-md hover:bg-white/10 active:bg-white/20 transition-all group"
        >
          <div className="w-12 h-12 flex items-center justify-center drop-shadow-lg group-hover:scale-105 transition-transform">
            <app.icon size={48} color={app.color} />
          </div>
          <span className="text-[11px] text-white font-medium text-center drop-shadow-md px-1 leading-tight">
            {app.name}
          </span>
        </button>
      ))}
    </>
  );
}
