
export enum Language {
  JA = 'ja',
  EN = 'en',
  ZH = 'zh',
}

export type LocalizedContent = {
  [key in Language]: string;
};

export interface Quest {
  id: string;
  title: LocalizedContent;
  goal: LocalizedContent;
  problem: LocalizedContent;
  hint: LocalizedContent;
  solution: string;
  solutionComment: LocalizedContent;
  duration: number;
  points: number; // This will now be treated as XP
  type: 'html' | 'css' | 'js';
  baseHtml?: string; // For CSS/JS quests
}

export interface Course {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  quests: Quest[];
  accentColor: string;
  bgColor: string;
}

export type Progress = {
  [questId: string]: {
    completed: boolean;
    stars: number;
  };
};

export type LevelInfo = {
  level: number;
  currentXp: number;
  xpForNextLevel: number;
  totalXp: number;
};

export interface AppContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  progress: Progress;
  updateQuestProgress: (questId: string, stars: number) => void;
  t: (content: { [key in Language]: string }) => string;
  levelInfo: LevelInfo;
}
