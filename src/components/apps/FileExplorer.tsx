import { Folder, ChevronRight, HardDrive, Download, Music, Image as ImageIcon, Video, Clock } from 'lucide-react';

export default function FileExplorer() {
  const sidebarItems = [
    { icon: Clock, name: 'Quick access' },
    { icon: HardDrive, name: 'Desktop' },
    { icon: Download, name: 'Downloads' },
    { icon: Folder, name: 'Documents' },
    { icon: ImageIcon, name: 'Pictures' },
    { icon: Music, name: 'Music' },
    { icon: Video, name: 'Videos' },
  ];

  const folders = [
    { name: 'Projects', date: '2026-05-10', type: 'File folder', size: '' },
    { name: 'Work Documents', date: '2026-05-12', type: 'File folder', size: '' },
    { name: 'Vacation Photos', date: '2026-05-01', type: 'File folder', size: '' },
    { name: 'Meeting Notes.docx', date: '2026-05-14', type: 'Microsoft Word Document', size: '24 KB' },
    { name: 'Presentation.pptx', date: '2026-05-14', type: 'PowerPoint Presentation', size: '1.2 MB' },
    { name: 'Report_Final.pdf', date: '2026-05-13', type: 'PDF Document', size: '542 KB' },
  ];

  return (
    <div className="flex h-full text-white/90">
      {/* Sidebar */}
      <div className="w-44 border-r border-white/5 flex flex-col pt-4 gap-1 p-2 bg-black/10">
        {sidebarItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 px-3 py-1.5 hover:bg-white/5 rounded text-xs cursor-pointer transition-colors group">
            <item.icon size={14} className="group-hover:text-sky-400" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="h-10 border-b border-white/5 flex items-center px-4 gap-6 bg-black/5">
          <div className="flex items-center gap-1 text-[11px] font-medium opacity-80 cursor-pointer hover:opacity-100">
             <ChevronRight size={14} /> <span>New</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-4 text-[11px] font-medium opacity-80">
            <span className="cursor-pointer hover:opacity-100">Cut</span>
            <span className="cursor-pointer hover:opacity-100">Copy</span>
            <span className="cursor-pointer hover:opacity-100">Paste</span>
            <span className="cursor-pointer hover:opacity-100">Rename</span>
            <span className="cursor-pointer hover:opacity-100 text-red-400">Delete</span>
          </div>
        </div>

        {/* Content Table */}
        <div className="flex-1 overflow-auto p-4">
           <table className="w-full text-left text-xs border-separate border-spacing-y-2">
             <thead>
               <tr className="text-white/40 font-normal">
                 <th className="font-normal px-2 pb-2 border-b border-white/5">Name</th>
                 <th className="font-normal px-2 pb-2 border-b border-white/5">Date modified</th>
                 <th className="font-normal px-2 pb-2 border-b border-white/5">Type</th>
                 <th className="font-normal px-2 pb-2 border-b border-white/5">Size</th>
               </tr>
             </thead>
             <tbody>
               {folders.map((folder, idx) => (
                 <tr key={idx} className="hover:bg-white/5 cursor-pointer rounded group transition-colors">
                   <td className="px-2 py-1.5 flex items-center gap-2">
                     {folder.name.includes('.') ? <Folder size={14} className="text-blue-400" /> : <Folder size={14} className="text-yellow-400" />}
                     <span>{folder.name}</span>
                   </td>
                   <td className="px-2 py-1.5 text-white/50">{folder.date}</td>
                   <td className="px-2 py-1.5 text-white/50">{folder.type}</td>
                   <td className="px-2 py-1.5 text-white/50">{folder.size}</td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
