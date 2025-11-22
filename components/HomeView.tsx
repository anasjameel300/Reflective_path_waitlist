import React, { useState } from 'react';
import { Plus, Home, Calendar, Book, Circle, CheckCircle2, MoreVertical, ChevronDown, ChevronRight, Target, Leaf, Compass, RefreshCw } from 'lucide-react';
import { Plan, Task, ViewState } from '../types';

interface HomeViewProps {
  mainGoal: string;
  goalStartDate: string;
  activePlan: Plan | null;
  onCreatePlan: (title: string) => void;
  onStartConclusion: () => void;
  onUpdateTasks: (tasks: Task[]) => void;
  onNavigate: (view: ViewState) => void;
  currentNav: ViewState;
}

export const HomeView: React.FC<HomeViewProps> = ({ 
  mainGoal,
  goalStartDate,
  activePlan, 
  currentNav
}) => {
  
  const [showCompleted, setShowCompleted] = useState(false);

  // Calculate days passed
  const start = new Date(goalStartDate);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - start.getTime());
  const daysPassed = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  const totalDays = 180;

  // Task filtering
  const activeTasks = activePlan ? activePlan.tasks.filter(t => !t.completed) : [];
  const completedTasks = activePlan ? activePlan.tasks.filter(t => t.completed) : [];

  return (
    <div className="w-full h-full bg-zinc-950 text-zinc-200 flex flex-col relative pb-32 overflow-y-auto no-scrollbar pt-16">
      
      {/* --- GOAL CARD --- */}
      <div className="px-6 shrink-0">
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 text-center relative overflow-hidden group transition-all animate-breathe">
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-medium mb-6">Current Focus</p>
            
            <h1 className="text-3xl md:text-4xl serif text-zinc-100 mb-8 leading-tight drop-shadow-lg">
              {mainGoal}
            </h1>

            <div className="flex items-center justify-center text-zinc-500 text-xs">
                <div className="flex items-center gap-2 bg-zinc-950/50 rounded-full px-4 py-1 border border-zinc-800/50">
                     <span className="font-medium text-zinc-400">Day {daysPassed}</span>
                     <span className="text-zinc-600">of</span>
                     <span className="text-zinc-600">{totalDays}</span>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-[2px] bg-zinc-900 w-full">
                <div 
                    className="h-full bg-[#8da391] opacity-70 shadow-[0_0_15px_rgba(141,163,145,0.8)]" 
                    style={{ width: `${(daysPassed / totalDays) * 100}%` }} 
                />
            </div>
        </div>
      </div>

      {/* --- PLANNER SECTION --- */}
      <div className="flex-grow px-6 pt-6">
        {!activePlan ? (
          // Empty State Placeholder
          <div className="border border-dashed border-zinc-800 rounded-3xl p-8 flex flex-col items-center text-center space-y-6 bg-zinc-900/20">
               <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-600 border border-zinc-800">
                  <Compass className="w-5 h-5" />
               </div>
               <div className="space-y-2">
                  <h3 className="serif text-xl text-zinc-300">Draft Your Strategy</h3>
                  <p className="text-zinc-600 text-sm font-light max-w-[200px] mx-auto leading-relaxed">
                      The goal is set. The path is waiting. Create a simple plan to begin.
                  </p>
               </div>
               <button className="text-xs uppercase tracking-widest font-bold text-zinc-500 border-b border-transparent pb-0.5">
                   Create Plan
               </button>
          </div>
        ) : (
          // ACTIVE PLAN VIEW
          <div className="flex flex-col h-full pb-24">
            
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-zinc-900/50">
              <div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 block mb-1">Active Strategy</span>
                <h2 className="text-xl serif text-zinc-200">{activePlan.title}</h2>
              </div>
              <div className="p-2 text-zinc-500">
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-3 mb-8">
                <div className="mb-4">
                    <button 
                        className="w-full py-3 border border-dashed border-zinc-800 text-zinc-600 rounded-xl text-sm flex items-center justify-center gap-2"
                    >
                        <Plus className="w-4 h-4" /> Add Task
                    </button>
                </div>

                {/* Active Tasks */}
                {activeTasks.map((task) => (
                  <div 
                    key={task.id}
                    className="flex items-start gap-4 p-4 bg-zinc-900/20 border border-zinc-900/50 rounded-xl"
                  >
                    <div className={`mt-0.5 text-zinc-700`}>
                      <Circle className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex-grow">
                      <p className="text-base text-zinc-300 leading-tight mb-2 font-light">
                        {task.title}
                      </p>
                      <div className="flex items-center gap-3">
                          {task.type === 'milestone' ? (
                              <span className="text-[9px] tracking-[0.15em] uppercase font-bold text-[#8da391] flex items-center gap-1">
                                  <Target className="w-3 h-3" /> Milestone
                              </span>
                          ) : (
                              <span className="text-[9px] tracking-[0.15em] uppercase font-bold text-zinc-600 flex items-center gap-1">
                                  <Leaf className="w-3 h-3" /> Support
                              </span>
                          )}

                          {task.isRepeatable && (
                              <span className="text-[9px] tracking-[0.15em] uppercase font-bold text-zinc-600 flex items-center gap-1 opacity-60">
                                  <RefreshCw className="w-3 h-3" /> Daily
                              </span>
                          )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Completed Tasks Accordion */}
            {completedTasks.length > 0 && (
                <div className="mt-auto pt-8 border-t border-zinc-900/50">
                    <button 
                        onClick={() => setShowCompleted(!showCompleted)}
                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-600 mb-4"
                    >
                        {showCompleted ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                        Completed ({completedTasks.length})
                    </button>
                    
                    {showCompleted && (
                        <div className="space-y-2">
                            {completedTasks.map((task) => (
                                <div 
                                    key={task.id}
                                    className="flex items-center gap-3 p-3 rounded-lg opacity-40"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-[#8da391]" />
                                    <span className="text-sm text-zinc-400 line-through flex-grow font-light">{task.title}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Nav */}
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