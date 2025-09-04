
import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { GlobeIcon } from './icons/GlobeIcon';

interface HeaderProps {
    onLanguageSelectClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLanguageSelectClick }) => {
    const { language, levelInfo } = useAppContext();
    const progressPercent = levelInfo.xpForNextLevel > 0 ? (levelInfo.currentXp / levelInfo.xpForNextLevel) * 100 : 0;

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-20 shadow-soft">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                         <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-accent">
                            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 7L12 12M12 12L22 7M12 12V22M17 4.5L7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h1 className="text-xl font-bold text-gray-800">CodeBloom</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 w-48">
                            <span className="font-bold text-sm text-gray-600 bg-gray-100 rounded-md px-2 py-1 border border-gray-200">LVL {levelInfo.level}</span>
                            <div className="w-full">
                               <div className="w-full bg-gray-200 rounded-full h-2">
                                   <div className="bg-brand-accent h-2 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
                               </div>
                               <p className="text-xs text-gray-500 text-right mt-0.5 font-medium">{levelInfo.currentXp} / {levelInfo.xpForNextLevel} XP</p>
                            </div>
                        </div>
                        <button 
                            onClick={onLanguageSelectClick} 
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-md"
                            aria-label="Select language"
                        >
                            <GlobeIcon />
                            <span className="font-medium uppercase text-sm">{language}</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
