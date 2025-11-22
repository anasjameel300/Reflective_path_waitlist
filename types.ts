export type TaskType = 'milestone' | 'support';

export interface Task {
  id: string;
  title: string;
  type: TaskType;
  completed: boolean;
  dateAdded: string;
  isRepeatable?: boolean;
}

export interface Plan {
  id: string;
  title: string;
  status: 'active' | 'completed' | 'abandoned';
  startDate: string;
  tasks: Task[];
  reflection?: string;
}

export interface DayLog {
  date: string;
  milestonesCompleted: number;
  supportsCompleted: number;
}

export type ViewState = 'home' | 'calendar' | 'memory';
