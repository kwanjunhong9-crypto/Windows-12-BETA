import { RefreshCcw, Home, Lock, ChevronLeft, ChevronRight, Plus, X, Search } from 'lucide-react';
import { useState } from 'react';

export default function Chrome() {
  const [url, setUrl] = useState('https://www.google.com');

  return (
    <div className="flex flex-col h-full bg-[#35363a] text-white">
      {/* Tab bar */}
      <div className="h-10 flex items-center bg-[#202124] px-2 gap-1">
        <div className="flex items-center gap-2 bg-[#35363a] h-8 rounded-t-lg px-3 min-w-[200px] border-t border-x border-white/5 relative">
          <span className="text-[11px] truncate">New Tab - Google</span>
          <X size={10} className="ml-auto opacity-50 hover:opacity-100 cursor-pointer" />
        </div>
        <button className="p-2 hover:bg-white/5 rounded-md transition-colors">
          <Plus size={14} />
        </button>
      </div>

      {/* URL bar Area */}
      <div className="h-10 flex items-center px-4 gap-4 bg-[#35363a] border-b border-black/20">
        <div className="flex items-center gap-4 text-white/70">
          <ChevronLeft size={16} className="cursor-pointer hover:text-white" />
          <ChevronRight size={16} className="cursor-pointer hover:text-white" />
          <RefreshCcw size={14} className="cursor-pointer hover:text-white" />
        </div>
        <div className="flex-1 h-7 bg-[#202124] rounded-full flex items-center px-4 gap-3 border border-transparent focus-within:border-blue-500/50 transition-colors">
          <Lock size={10} className="text-white/40" />
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
            className="bg-transparent text-[11px] w-full focus:outline-none text-white/90"
          />
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white text-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
        {/* Google Logo (styled) */}
        <div className="flex text-7xl font-bold mb-8 select-none tracking-tight">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </div>
        
        <div className="w-[580px] h-12 bg-white rounded-full border border-gray-200 flex items-center px-6 gap-4 shadow-sm hover:shadow-md transition-shadow">
           <Search size={18} className="text-gray-400" />
           <input 
             type="text" 
             placeholder="Search Google or type a URL" 
             className="flex-1 bg-transparent border-none outline-none text-base text-gray-800"
           />
           <button className="text-gray-400 font-medium text-sm hover:text-gray-600">
             <RefreshCcw size={18} />
           </button>
        </div>
        
        <div className="mt-8 flex gap-6">
           <button className="px-4 py-2 bg-gray-50 border border-gray-100 rounded text-sm hover:border-gray-300 transition-colors">Google Search</button>
           <button className="px-4 py-2 bg-gray-50 border border-gray-100 rounded text-sm hover:border-gray-300 transition-colors">I'm Feeling Lucky</button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          Google offered in: <span className="text-blue-600 hover:underline cursor-pointer ml-1">中文 (繁體)</span>
        </div>
      </div>
    </div>
  );
}
