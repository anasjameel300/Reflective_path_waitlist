import React from 'react';
import { Home, Calendar, Book, ChevronLeft, ChevronRight } from 'lucide-react';
import { DayLog, ViewState } from '../types';

interface CalendarViewProps {
  logs: DayLog[];
  onNavigate: (view: ViewState) => void;
  currentNav: ViewState;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ logs, currentNav }) => {
  
  const getStatus = (dateStr: string): 'progress' | 'maintenance' | 'empty' => {
    const log = logs.find(l => l.date === dateStr);
    if (!log) return 'empty';
    if (log.milestonesCompleted > 0) return 'progress';
    if (log.supportsCompleted > 0) return 'maintenance';
    return 'empty';
  };

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); 
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return {
      day,
      date: dateStr,
      status: getStatus(dateStr)
    };
  });

  const monthName = now.toLocaleString('default', { month: 'long' });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'progress': return 'bg-[#8da391] text-zinc-900 font-bold shadow-[0_0_10px_rgba(141,163,145,0.3)]';
      case 'maintenance': return 'bg-zinc-800 text-zinc-400';
      default: return 'bg-transparent text-zinc-700'; 
    }
  };

  return (
    <div className="w-full h-full bg-zinc-950 text-zinc-200 flex flex-col relative pb-32 no-scrollbar overflow-y-auto pt-16">
      
      {/* Header - Minimalist */}
      <div className="px-8 mb-8">
        <h2 className="text-3xl serif text-zinc-100 mb-1">Consistency</h2>
        <p className="text-zinc-500 text-sm">Your rhythm of progress.</p>
      </div>

      <div className="px-8 mb-6 flex justify-between items-center">
        <h3 className="text-xl serif text-zinc-300">{monthName} {year}</h3>
        <div className="flex gap-2 text-zinc-600">
          <button className="p-2 rounded-full"><ChevronLeft className="w-5 h-5" /></button>
          <button className="p-2 rounded-full"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>

      <div className="px-6 flex-grow flex flex-col items-center">
        
        <div className="grid grid-cols-7 gap-3 w-full max-w-sm">
            {['S','M','T','W','T','F','S'].map((d, i) => (
                <div key={i} className="text-center text-zinc-600 text-[10px] font-bold tracking-widest mb-2">{d}</div>
            ))}
            
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} />
            ))}
            
            {days.map((d) => (
                <div key={d.day} className="aspect-square flex items-center justify-center relative group">
                    <div className={`w-full h-full rounded-full flex items-center justify-center text-xs transition-all duration-500 ${getStatusColor(d.status)}`}>
                        {d.day}
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 flex gap-8 text-[10px] uppercase tracking-widest text-zinc-500">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#8da391] shadow-[0_0_5px_rgba(141,163,145,0.5)]"></div>
                <span>Progress</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                <span>Maintenance</span>
            </div>
        </div>

      </div>

       <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-10 px-8 py-4 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/50 rounded-full shadow-2xl shadow-black">
          <div className={`${currentNav === 'home' ? 'text-zinc-100 scale-110' : 'text-zinc-600'}`}>
            <Home className="w-5 h-5" />
          </div>
          <div className={`${currentNav === 'calendar' ? 'text-zinc-100 scale-110' : 'text-zinc-600'}`}>
            <Calendar className="w-5 h-5" />
          </div>
          <div className={`${currentNav === 'memory' ? 'text-zinc-100 scale-110' : 'text-zinc-600'}`}>
            <Book className="w-5 h-5" />
          </div>
        </div>
      </div>

    </div>
  );
};