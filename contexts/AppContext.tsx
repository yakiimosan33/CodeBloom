
import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode } from 'react';
import { Language, Progress, LevelInfo, AppContextType } from '../types';
import { COURSES } from '../data/courses';

export const calculateLevelInfo = (totalXp: number): LevelInfo => {
    let level = 1;
    let xpForNext = 150;
    let xpSumForLevelUp = 150;

    while (totalXp >= xpSumForLevelUp) {
        level++;
        // Increase xp needed for next level by 50
        xpForNext += 50; 
        xpSumForLevelUp += xpForNext;
    }
    
    const xpAtStartOfLevel = xpSumForLevelUp - xpForNext;
    const currentXp = totalXp - xpAtStartOfLevel;

    return { level, currentXp, xpForNextLevel: xpForNext, totalXp };
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
    const savedLang = localStorage.getItem('codebloom_language');
    if (savedLang && Object.values(Language).includes(savedLang as Language)) {
        return savedLang as Language;
    }
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ja')) return Language.JA;
    if (browserLang.startsWith('zh')) return Language.ZH;
    return Language.EN;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [progress, setProgress] = useState<Progress>(() => {
    try {
      const savedProgress = localStorage.getItem('codebloom_progress');
      return savedProgress ? JSON.parse(savedProgress) : {};
    } catch (error) {
      console.error("Failed to parse progress from localStorage", error);
      return {};
    }
  });
  const [levelInfo, setLevelInfo] = useState<LevelInfo>(calculateLevelInfo(0));

  useEffect(() => {
    localStorage.setItem('codebloom_progress', JSON.stringify(progress));
    
    const totalXp = Object.keys(progress).reduce((acc, questId) => {
      if (progress[questId].completed) {
        for (const course of COURSES) {
          const quest = course.quests.find(q => q.id === questId);
          if (quest) {
            return acc + quest.points;
          }
        }
      }
      return acc;
    }, 0);
    setLevelInfo(calculateLevelInfo(totalXp));

  }, [progress]);
  
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('codebloom_language', lang);
  };

  const updateQuestProgress = useCallback((questId: string, stars: number) => {
    setProgress(prev => {
        if (prev[questId]?.completed) {
            return {
                ...prev,
                [questId]: { ...prev[questId], stars: Math.max(prev[questId].stars || 0, stars) },
            };
        }
        return {
            ...prev,
            [questId]: { completed: true, stars: Math.max(prev[questId]?.stars || 0, stars) },
        }
    });
  }, []);

  const t = useCallback((content: { [key in Language]: string }): string => {
    return content[language] || content[Language.EN];
  }, [language]);

  const value = { language, setLanguage, progress, updateQuestProgress, t, levelInfo };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
