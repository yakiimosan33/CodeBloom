
import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Quest, LevelInfo } from '../types';

interface CompletionModalProps {
  onNext: () => void;
  quest: Quest;
  levelInfoBeforeCompletion: LevelInfo;
}

const CompletionModal: React.FC<CompletionModalProps> = ({ onNext, quest, levelInfoBeforeCompletion }) => {
    const { t, levelInfo: newLevelInfo } = useAppContext();
    const didLevelUp = newLevelInfo.level > levelInfoBeforeCompletion.level;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center transform transition-transform duration-300">
                <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-mint mb-4">
                     <svg className="w-16 h-16 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{t({ ja: "クリア！", en: "Quest Complete!", zh: "任务完成！" })}</h2>
                <p className="text-lg font-semibold text-brand-accent mb-4">
                    +{quest.points} XP
                </p>
                
                {didLevelUp && (
                     <div className="my-6 animate-fade-in">
                        <p className="text-4xl font-bold text-yellow-500" style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.7)' }}>LEVEL UP!</p>
                        <p className="text-lg text-gray-600 mt-1">{t({ ja: `レベル ${newLevelInfo.level} に到達しました！`, en: `You reached Level ${newLevelInfo.level}!`, zh: `你达到了 ${newLevelInfo.level} 级！`})}</p>
                    </div>
                )}

                <p className="text-gray-600 mb-8">{t({ ja: "素晴らしいです！次のクエストに進みましょう。", en: "Great work! Let's move on to the next quest.", zh: "太棒了！让我们继续下一个任务吧。" })}</p>
                
                <button
                    onClick={onNext}
                    className="w-full px-6 py-3 bg-brand-accent text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                >
                    {t({ ja: "次へ", en: "Continue", zh: "继续" })}
                </button>
            </div>
        </div>
    );
};

export default CompletionModal;
