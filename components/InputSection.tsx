
import React from 'react';
import { AnalyzeIcon } from './icons';

interface InputSectionProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAnalyze: () => void;
  isLoading: boolean;
  error: string | null;
}

const InputSection: React.FC<InputSectionProps> = ({ value, onChange, onAnalyze, isLoading, error }) => {
  return (
    <div className="flex flex-col h-full bg-gray-800 rounded-lg border border-gray-700 shadow-lg p-4 sm:p-6 mb-8 lg:mb-0">
      <label htmlFor="instagram-data" className="text-lg font-semibold text-gray-200 mb-3">
        Paste Instagram Data Here
      </label>
      <p className="text-sm text-gray-400 mb-4">
        Include captions, comments, hashtags, and likes for the best results. The more data you provide, the more accurate the analysis will be.
      </p>
      <textarea
        id="instagram-data"
        value={value}
        onChange={onChange}
        placeholder={`Example:
Post 1: Caption = “Best day ever! 🌸✨”, Likes = 230, Comments = “So cute!”, “Love it!! 💕”
Post 2: Caption = “Feeling tired lately...”, Likes = 120, Comments = “Take care”, “Hope you feel better.”`}
        className="flex-grow w-full p-4 bg-gray-900 border border-gray-600 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200 text-gray-200 resize-none min-h-[300px] lg:min-h-0"
        disabled={isLoading}
      />
      {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}
      <button
        onClick={onAnalyze}
        disabled={isLoading}
        className="mt-6 w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Analyzing...
          </>
        ) : (
          <>
            <AnalyzeIcon className="h-5 w-5 mr-2" />
            Analyze Sentiment
          </>
        )}
      </button>
    </div>
  );
};

export default InputSection;
