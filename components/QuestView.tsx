
import React, { useState, useEffect } from 'react';
import { Quest, LevelInfo } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import CompletionModal from './CompletionModal';

interface QuestViewProps {
  quest: Quest;
  onBack: () => void;
  onComplete: () => void;
  courseColor: string;
}

const normalizeCode = (code: string) => {
  return code
    .replace(/\s+/g, ' ') // Collapse whitespace
    .trim();
};

const QuestView: React.FC<QuestViewProps> = ({ quest, onBack, onComplete, courseColor }) => {
  const { t, updateQuestProgress, levelInfo } = useAppContext();
  const [userCode, setUserCode] = useState('');
  const [previewCode, setPreviewCode] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedback, setFeedback] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [levelInfoBeforeCompletion, setLevelInfoBeforeCompletion] = useState<LevelInfo | null>(null);


  useEffect(() => {
      setUserCode('');
      setPreviewCode('');
      setShowHint(false);
      setIsCompleted(false);
      setFeedback(null);
      setLevelInfoBeforeCompletion(null);
  }, [quest]);

  const handleCheckCode = () => {
    const normalizedUserCode = normalizeCode(userCode);
    const normalizedSolution = normalizeCode(quest.solution);
    
    if (normalizedUserCode === normalizedSolution) {
      setFeedback({ type: 'success', message: t({ ja: "正解です！素晴らしい！", en: "Correct! Great job!", zh: "回答正确！太棒了！"}) });
      setLevelInfoBeforeCompletion(levelInfo); // Capture state before update
      updateQuestProgress(quest.id, 3); // Assume 3 stars for simplicity
      setTimeout(() => setIsCompleted(true), 1000);
    } else {
      setFeedback({ type: 'error', message: t({ ja: "惜しい！もう一度確認してみましょう。", en: "Not quite! Let's check it again.", zh: "还差一点！再检查一下吧。"}) });
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  const handleRunCode = () => {
    setPreviewCode(userCode);
  };
  
  const getPreviewSrcDoc = () => {
    switch (quest.type) {
      case 'html':
        return previewCode;
      case 'css':
        return `<html><head><style>${previewCode}</style></head><body>${quest.baseHtml}</body></html>`;
      case 'js':
        return `<html><head></head><body>${quest.baseHtml}<script>${previewCode}</script></body></html>`;
      default:
        return '';
    }
  };

  return (
    <div className="animate-fade-in">
      <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-4 group">
        <ArrowLeftIcon />
        <span className="font-medium">{t({ja: "クエスト一覧に戻る", en: "Back to Quests", zh: "返回任务列表"})}</span>
      </button>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Side: Instructions & Editor */}
        <div className="flex flex-col space-y-6">
            <div className={`p-6 rounded-lg shadow-soft ${courseColor}`}>
                <h2 className="text-2xl font-bold text-gray-800">{t(quest.title)}</h2>
                <p className="text-gray-700 mt-2 whitespace-pre-wrap">{t(quest.problem)}</p>
            </div>
            
            <div className="relative flex-grow">
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                placeholder={t({ja: "ここにコードを入力...", en: "Type your code here...", zh: "在此输入代码..."})}
                className="w-full h-80 p-4 font-mono text-sm bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition resize-none placeholder:text-gray-500"
                spellCheck="false"
              />
            </div>
        </div>

        {/* Right Side: Preview & Controls */}
        <div className="flex flex-col space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-soft border border-gray-200 flex-grow">
                <h3 className="font-semibold text-gray-700 mb-2">{t({ja: "プレビュー", en: "Preview", zh: "预览"})}</h3>
                <iframe
                    srcDoc={getPreviewSrcDoc()}
                    title="Preview"
                    className="w-full h-full border border-gray-200 rounded-md bg-white"
                    sandbox="allow-scripts"
                />
            </div>

            <div className="space-y-4">
                 {feedback && (
                    <div className={`p-3 rounded-md text-sm text-center ${feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {feedback.message}
                    </div>
                )}
                <div className="flex items-center space-x-4">
                    <button onClick={() => setShowHint(!showHint)} className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
                       {t({ja: "ヒントを見る", en: "Get a Hint", zh: "查看提示"})}
                    </button>
                    <button onClick={handleRunCode} className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
                       {t({ja: "実行", en: "Run", zh: "运行"})}
                    </button>
                    <button onClick={handleCheckCode} className="flex-1 px-4 py-3 bg-brand-accent text-white rounded-lg font-semibold hover:opacity-90 transition">
                       {t({ja: "提出", en: "Submit", zh: "提交"})}
                    </button>
                </div>
                 {showHint && (
                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg text-yellow-800 text-sm">
                        <p>{t(quest.hint)}</p>
                    </div>
                )}
            </div>
        </div>
      </div>
      {isCompleted && levelInfoBeforeCompletion && <CompletionModal onNext={onComplete} quest={quest} levelInfoBeforeCompletion={levelInfoBeforeCompletion} />}
    </div>
  );
};

export default QuestView;
