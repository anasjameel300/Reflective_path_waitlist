import React from 'react';
import { Home, Calendar, Book, Archive, Quote } from 'lucide-react';
import { Plan, ViewState } from '../types';

interface MemoryLaneViewProps {
  plans: Plan[];
  onNavigate: (view: ViewState) => void;
  currentNav: ViewState;
}

export const MemoryLaneView: React.FC<MemoryLaneViewProps> = ({ plans, currentNav }) => {
  return (
    <div className="w-full h-full bg-zinc-950 text-zinc-200 flex flex-col relative pb-32 no-scrollbar overflow-y-auto pt-16">
      
      <div className="px-8 mb-8">
        <h2 className="text-3xl serif text-zinc-100 mb-1">Your Story</h2>
        <p className="text-zinc-500 text-sm">The chapters of your journey.</p>
      </div>

      <div className="px-6 flex-grow relative">
        
        {plans.length > 0 && (
            <div className="absolute left-10 top-4 bottom-0 w-[1px] bg-zinc-800/50"></div>
        )}

        {plans.length === 0 ? (
            <div className="text-center py-24 opacity-40">
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mx-auto mb-4 border border-zinc-800">
                    <Archive className="w-6 h-6 text-zinc-600" />
                </div>
                <p className="text-zinc-500 text-sm font-serif">No chapters written yet.</p>
            </div>
        ) : (
            plans.map((plan, index) => (
                <div key={plan.id} className="relative pl-12 mb-12">
                    
                    <div className={`absolute left-[11px] top-6 w-3 h-3 rounded-full border-2 z-10 bg-zinc-950 ${
                        plan.status === 'completed' ? 'border-[#8da391]' : 'border-red-900'
                    }`}></div>

                    <div className="bg-zinc-900/20 border border-zinc-800/60 rounded-2xl p-6">
                        
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 block mb-2">Chapter {plans.length - index}</span>
                                <h3 className="text-xl serif text-zinc-200 leading-tight">{plan.title}</h3>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold ${
                                plan.status === 'completed' ? 'bg-[#8da391]/10 text-[#8da391] border border-[#8da391]/20' : 'bg-red-900/10 text-red-400 border border-red-900/20'
                            }`}>
                                {plan.status === 'completed' ? 'Success' : 'Pivot'}
                            </span>
                        </div>
                        
                        {plan.reflection && (
                            <div className="mb-6">
                                <Quote className="w-4 h-4 text-zinc-700 mb-2 rotate-180" />
                                <p className="text-zinc-400 text-sm font-serif italic leading-relaxed pl-2 border-l border-zinc-800">
                                    "{plan.reflection}"
                                </p>
                            </div>
                        )}

                        <div className="flex items-center gap-6 pt-4 border-t border-zinc-800/50">
                            <div className="flex flex-col">
                                <span className="text-xs text-zinc-600 uppercase tracking-wider">Milestones</span>
                                <span className="text-sm font-bold text-zinc-300">{plan.tasks.filter(t => t.completed && t.type === 'milestone').length}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-zinc-600 uppercase tracking-wider">Supports</span>
                                <span className="text-sm font-bold text-zinc-300">{plan.tasks.filter(t => t.completed && t.type === 'support').length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )}
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