import { LucideIcon } from 'lucide-react';

export type AppID = 'explorer' | 'chrome' | 'settings' | 'notepad' | 'terminal' | 'store';

export interface WindowInstance {
  id: string;
  appId: AppID;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

export interface AppConfig {
  id: AppID;
  name: string;
  icon: LucideIcon;
  color: string;
}
