
import React, { useState, useEffect } from 'react';
import { Course, Quest } from './types';
import { COURSES } from './data/courses';
import { useAppContext } from './contexts/AppContext';
import LanguageSelectorModal from './components/LanguageSelectorModal';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import QuestView from './components/QuestView';
import Header from './components/Header';

const App: React.FC = () => {
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem('codebloom_language');
    if (isFirstVisit) {
      setIsLangModalOpen(true);
    }
  }, []);

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setSelectedQuest(null);
  };
  
  const handleSelectQuest = (quest: Quest) => {
    setSelectedQuest(quest);
  };
  
  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setSelectedQuest(null);
  };

  const handleBackToCourseDetail = () => {
    setSelectedQuest(null);
  };
  
  const handleQuestComplete = () => {
    // In a real app, you might show a summary screen before going back
    setSelectedQuest(null);
  }

  const renderContent = () => {
    if (selectedQuest && selectedCourse) {
      return <QuestView quest={selectedQuest} onBack={handleBackToCourseDetail} onComplete={handleQuestComplete} courseColor={selectedCourse.bgColor} />;
    }
    if (selectedCourse) {
      return <CourseDetail course={selectedCourse} onSelectQuest={handleSelectQuest} onBack={handleBackToCourses} />;
    }
    return <CourseList courses={COURSES} onSelectCourse={handleSelectCourse} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onLanguageSelectClick={() => setIsLangModalOpen(true)} />
      <main className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
        {renderContent()}
      </main>
      {isLangModalOpen && <LanguageSelectorModal onClose={() => setIsLangModalOpen(false)} />}
    </div>
  );
};

export default App;
