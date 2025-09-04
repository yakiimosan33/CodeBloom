
import React from 'react';
import { Course } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { SparklesIcon } from './icons/SparklesIcon';

interface CourseListProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

const CourseList: React.FC<CourseListProps> = ({ courses, onSelectCourse }) => {
  const { t, progress } = useAppContext();
  
  const titles = {
    ja: "コース選択",
    en: "Select a Course",
    zh: "选择课程"
  };

  const comingSoonTitle = {
    ja: "準備中...",
    en: "Coming Soon...",
    zh: "敬请期待..."
  };

  const comingSoonDescription = {
      ja: "新しいコースを準備中です！",
      en: "New courses are being prepared!",
      zh: "新课程正在准备中！"
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{t(titles)}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
           const completedQuests = course.quests.filter(q => progress[q.id]?.completed).length;
           const totalQuests = course.quests.length;
           const courseProgress = totalQuests > 0 ? (completedQuests / totalQuests) * 100 : 0;

          return (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className={`bg-white rounded-xl shadow-soft overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-transform duration-300 border-t-4 ${course.accentColor}`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{t(course.title)}</h3>
                <p className="text-gray-500 mt-1">{t(course.description)}</p>
                <div className="mt-6">
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{completedQuests} / {totalQuests}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`bg-brand-accent h-2 rounded-full`} style={{ width: `${courseProgress}%` }}></div>
                    </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* Coming Soon Card */}
        <div
          className="bg-white rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-center cursor-default"
        >
          <SparklesIcon />
          <h3 className="text-2xl font-bold text-gray-500 mt-4">{t(comingSoonTitle)}</h3>
          <p className="text-gray-400 mt-1">{t(comingSoonDescription)}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseList;