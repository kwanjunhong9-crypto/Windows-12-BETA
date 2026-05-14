import { useState } from 'react';

export default function Notepad() {
  const [content, setContent] = useState('Welcome to Notepad.\n\nThis is a simple text editor inspired by the Windows 11 version.\n\n- Dark Mode\n- Simple Interface\n- Mica Effects');

  return (
    <div className="flex flex-col h-full bg-[#1c1c1c] text-white font-mono">
      {/* Menu bar */}
      <div className="h-8 flex items-center px-4 gap-6 text-[11px] text-white/70 border-b border-white/5 bg-[#0f0f0f]">
        <span className="cursor-pointer hover:text-white">File</span>
        <span className="cursor-pointer hover:text-white">Edit</span>
        <span className="cursor-pointer hover:text-white">View</span>
      </div>

      {/* Editor */}
      <textarea 
        autoFocus
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 w-full bg-transparent p-6 outline-none resize-none text-sm leading-relaxed text-white/90"
        spellCheck="false"
      />

      {/* Status Bar */}
      <div className="h-6 flex items-center justify-end px-6 gap-6 text-[10px] text-white/40 border-t border-white/5 bg-[#0f0f0f]">
        <span>Ln 1, Col 1</span>
        <span>100%</span>
        <span>Windows (CRLF)</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
}
