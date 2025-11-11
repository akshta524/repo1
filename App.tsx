
import React, { useState, useCallback } from 'react';
import { analyzeInstagramData } from './services/geminiService';
import InputSection from './components/InputSection';
import ResultSection from './components/ResultSection';
import { LogoIcon } from './components/icons';

const App: React.FC = () => {
  const [inputData, setInputData] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!inputData.trim()) {
      setError('Please paste your Instagram data into the text area.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult('');

    try {
      const result = await analyzeInstagramData(inputData);
      setAnalysisResult(result);
    } catch (err) {
      setError('An error occurred during analysis. Please check your data and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [inputData]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <LogoIcon className="h-8 w-8 text-brand-primary" />
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-transparent bg-clip-text">
                Instagram Sentiment Analyzer
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 h-full">
          <InputSection
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            onAnalyze={handleAnalyze}
            isLoading={isLoading}
            error={error}
          />
          <ResultSection
            result={analysisResult}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
