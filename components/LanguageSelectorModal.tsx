
import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Language } from '../types';

interface LanguageSelectorModalProps {
  onClose: () => void;
}

const LANGUAGES = [
  { code: Language.EN, name: 'English' },
  { code: Language.JA, name: '日本語' },
  { code: Language.ZH, name: '简体中文' },
];

const LanguageSelectorModal: React.FC<LanguageSelectorModalProps> = ({ onClose }) => {
  const { setLanguage } = useAppContext();

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Select a Language</h2>
        <p className="text-gray-500 mb-6">Choose your preferred language to start learning.</p>
        <div className="space-y-3">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelectLanguage(lang.code)}
              className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
            >
              <span className="font-medium text-gray-700">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectorModal;
