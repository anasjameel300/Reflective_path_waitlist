import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneMockup } from './PhoneMockup';
import { LandingForm } from './LandingForm';
import { HomeView } from './HomeView';
import { CalendarView } from './CalendarView';
import { MemoryLaneView } from './MemoryLaneView';
import { Task, Plan, DayLog } from '../types';

// --- DUMMY DATA FOR MOCKUPS ---
const MOCK_GOAL = "Write a Novel";
const MOCK_START_DATE = new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(); // 12 days ago

const MOCK_TASKS: Task[] = [
    { id: '1', title: 'Draft Chapter 4 Scene', type: 'milestone', completed: false, dateAdded: '' },
    { id: '2', title: 'Review Character Notes', type: 'support', completed: true, dateAdded: '', isRepeatable: true },
    { id: '3', title: 'Read for 30 mins', type: 'support', completed: false, dateAdded: '', isRepeatable: true },
];

const MOCK_PLAN: Plan = {
    id: '1',
    title: 'Phase 1: The Rough Draft',
    status: 'active',
    startDate: MOCK_START_DATE,
    tasks: MOCK_TASKS
};

const MOCK_LOGS: DayLog[] = Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    milestonesCompleted: Math.random() > 0.6 ? 1 : 0,
    supportsCompleted: Math.random() > 0.3 ? 1 : 0,
}));

const MOCK_ARCHIVED_PLANS: Plan[] = [
    { id: 'old1', title: 'Outline & Character Design', status: 'completed', startDate: '2023-01-01', tasks: [], reflection: "I learned that I need to outline before I write, otherwise I get stuck." },
    { id: 'old2', title: 'Attempt 1: Pantsing it', status: 'abandoned', startDate: '2023-02-01', tasks: [], reflection: "Tried to write without a plan. Failed miserably after 3 days." }
];

export function LandingPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-[#8da391] selection:text-zinc-900 overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative pt-20 pb-32 px-6 flex flex-col items-center text-center overflow-hidden">

                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8da391] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto space-y-8 animate-in slide-in-from-bottom-8 fade-in duration-1000">
                    <div className="inline-block border border-zinc-800 rounded-full px-4 py-1.5 bg-zinc-900/50 backdrop-blur-sm mb-4">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-medium">Be the first to join</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl serif text-zinc-100 leading-tight tracking-tight">
                        The <span className="text-[#8da391]">Reflective</span> Path.
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-500 font-light max-w-xl mx-auto leading-relaxed">
                        A productivity tool for the quiet ambition. Focus on one major goal. Distinguish between progress and maintenance. Build a story, not just a streak.
                    </p>

                    <div className="pt-8">
                        <LandingForm />
                    </div>
                </div>
            </section>

            {/* --- SHOWCASE 1: THE HOME --- */}
            <section className="py-24 px-6 bg-zinc-900/20 border-y border-zinc-900">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* Phone Mockup */}
                    <div className="flex justify-center md:justify-end animate-in slide-in-from-left-8 fade-in duration-1000 delay-200">
                        <PhoneMockup>
                            <HomeView
                                mainGoal={MOCK_GOAL}
                                goalStartDate={MOCK_START_DATE}
                                activePlan={MOCK_PLAN}
                                onCreatePlan={() => { }}
                                onStartConclusion={() => { }}
                                onUpdateTasks={() => { }}
                                onNavigate={() => { }}
                                currentNav="home"
                            />
                        </PhoneMockup>
                    </div>

                    {/* Text */}
                    <div className="space-y-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl serif text-zinc-200">Identify True Progress.</h2>
                        <p className="text-zinc-500 leading-relaxed text-lg font-light">
                            Most apps treat checking emails the same as writing a chapter. We don't.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-2 h-2 rounded-full bg-[#8da391] shadow-[0_0_10px_#8da391]" />
                                <div>
                                    <h3 className="text-zinc-300 font-serif text-xl mb-1">Milestones</h3>
                                    <p className="text-zinc-600 text-sm">Tasks that actually advance your goal. Doing one makes today a "Progress Day".</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-2 h-2 rounded-full bg-zinc-700" />
                                <div>
                                    <h3 className="text-zinc-300 font-serif text-xl mb-1">Supports</h3>
                                    <p className="text-zinc-600 text-sm">The invisible work (prep, research, cleaning) that enables the milestones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SHOWCASE 2: CALENDAR & CONSISTENCY --- */}
            <section className="py-32 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* Text (Left on desktop) */}
                    <div className="order-2 md:order-1 space-y-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl serif text-zinc-200">Forgiving Consistency.</h2>
                        <p className="text-zinc-500 leading-relaxed text-lg font-light">
                            Life happens. If you miss a Milestone but do the Support work, you haven't failed. You've maintained.
                        </p>
                        <p className="text-zinc-500 leading-relaxed text-lg font-light">
                            Our calendar visualizes your rhythm, not just a binary success/failure chain.
                        </p>
                    </div>

                    {/* Phone Mockup */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-start">
                        <PhoneMockup>
                            <CalendarView
                                logs={MOCK_LOGS}
                                onNavigate={() => { }}
                                currentNav="calendar"
                            />
                        </PhoneMockup>
                    </div>
                </div>
            </section>

            {/* --- SHOWCASE 3: MEMORY LANE --- */}
            <section className="py-24 px-6 bg-zinc-900/20 border-y border-zinc-900 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8da391]/5 via-transparent to-transparent" />

                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl serif text-zinc-200">Build a Story, Not a Streak.</h2>
                        <p className="text-zinc-500 text-lg font-light max-w-xl mx-auto">
                            When you finish your goal, you don't get a badge. You get a "Memory Lane"—a timeline of your pivots, failures, and victories.
                        </p>
                    </div>

                    <div className="flex justify-center scale-90 md:scale-100 origin-top">
                        <PhoneMockup>
                            <MemoryLaneView
                                plans={MOCK_ARCHIVED_PLANS}
                                onNavigate={() => { }}
                                currentNav="memory"
                            />
                        </PhoneMockup>
                    </div>
                </div>
            </section>

            {/* --- CTA FOOTER --- */}
            <section className="py-32 px-6 text-center space-y-8">
                <h2 className="text-4xl serif text-zinc-100">Begin your quiet journey.</h2>
                <div className="max-w-md mx-auto">
                    <LandingForm />
                </div>
                <div className="pt-12 flex flex-col items-center gap-2">
                    <p className="text-zinc-600 text-xs uppercase tracking-widest">
                        © 2025 The Reflective Path by Anas Jameel. All rights reserved.
                    </p>
                    <Link to="/privacy" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">
                        Privacy Policy
                    </Link>
                </div>
            </section>

        </div>
    );
}
