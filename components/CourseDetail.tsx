import React from 'react';
import { Course, Quest } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { LockClosedIcon } from './icons/LockClosedIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface CourseDetailProps {
  course: Course;
  onSelectQuest: (quest: Quest) => void;
  onBack: () => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course, onSelectQuest, onBack }) => {
  const { t, progress } = useAppContext();
  
  let lastCompleted = -1;
  for (let i = 0; i < course.quests.length; i++) {
    if (progress[course.quests[i].id]?.completed) {
      lastCompleted = i;
    }
  }

  return (
    <div>
      <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-4 group">
        <ArrowLeftIcon />
        <span className="font-medium">{t({ja: "コース一覧に戻る", en: "Back to Courses", zh: "返回课程列表"})}</span>
      </button>
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-800">{t(course.title)}</h2>
        <p className="text-lg text-gray-500 mt-1">{t(course.description)}</p>
      </div>
      
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-[30px] top-2 h-full w-0.5 bg-gray-200" aria-hidden="true"></div>

        <div className="space-y-8">
          {course.quests.map((quest, index) => {
            const isCompleted = progress[quest.id]?.completed;
            const isCurrent = index === lastCompleted + 1;
            const isLocked = index > lastCompleted + 1;

            return (
              <div key={quest.id} className="relative flex items-start">
                {/* Status Icon */}
                <div className="absolute left-0 top-0 flex items-center justify-center">
                    {isCompleted ? (
                        <CheckCircleIcon />
                    ) : isLocked ? (
                        <LockClosedIcon />
                    ) : (
                        <div className="relative flex h-8 w-8 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                            <div className="relative h-8 w-8 rounded-full bg-brand-accent border-4 border-white"></div>
                        </div>
                    )}
                </div>

                {/* Quest Card */}
                <div className={`ml-12 w-full p-6 rounded-xl shadow-soft transition-all duration-300 ${isLocked ? 'bg-gray-100' : 'bg-white'}`}>
                    <p className={`text-sm font-semibold uppercase tracking-wider ${isLocked ? 'text-gray-400' : 'text-gray-500'}`}>{t({ja: `クエスト ${index + 1}`, en: `Quest ${index + 1}`, zh: `任务 ${index + 1}`})}</p>
                    <h3 className={`text-xl font-bold mt-1 ${isLocked ? 'text-gray-500' : 'text-gray-800'}`}>{t(quest.title)}</h3>
                    <p className={`mt-2 text-sm h-10 ${isLocked ? 'text-gray-400' : 'text-gray-600'}`}>{t(quest.goal)}</p>
                    
                    <div className="mt-4 flex justify-between items-center">
                        <span className={`text-sm ${isLocked ? 'text-gray-400' : 'text-gray-500'}`}>{quest.duration} {t({ja: "分", en: "min", zh: "分钟"})}</span>
                        <button 
                          onClick={() => !isLocked && onSelectQuest(quest)}
                          disabled={isLocked}
                          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-transform duration-200 ${isLocked ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-brand-accent text-white hover:opacity-90 transform hover:scale-105'}`}
                        >
                          {t({ja: isCompleted ? "再挑戦" : (isLocked ? "ロック中" : "開始"), en: isCompleted ? "Review" : (isLocked ? "Locked" : "Start"), zh: isCompleted ? "复习" : (isLocked ? "已锁定" : "开始")})}
                        </button>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;