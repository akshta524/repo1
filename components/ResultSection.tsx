
import React from 'react';

interface ResultSectionProps {
  result: string;
  isLoading: boolean;
}

const LoadingSkeleton: React.FC = () => (
  <div className="space-y-6 animate-pulse-fast">
    <div className="h-6 bg-gray-700 rounded w-1/3"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      <div className="h-4 bg-gray-700 rounded w-1/4"></div>
      <div className="h-4 bg-gray-700 rounded w-1/3"></div>
    </div>
    <div className="h-px bg-gray-700 w-full"></div>
    <div className="h-6 bg-gray-700 rounded w-1/4"></div>
    <div className="space-y-3">
        <div className="grid grid-cols-4 gap-4">
            <div className="h-4 bg-gray-700 rounded col-span-1"></div>
            <div className="h-4 bg-gray-700 rounded col-span-1"></div>
            <div className="h-4 bg-gray-700 rounded col-span-1"></div>
            <div className="h-4 bg-gray-700 rounded col-span-1"></div>
        </div>
        <div className="grid grid-cols-4 gap-4">
            <div className="h-4 bg-gray-700 rounded col-span-1"></div>
            <div className="h-4 bg-gray-700 rounded col-span-1"></div>
            <div className="h-4 bg-gray-700 rounded col-span-1"></div>
            <div className="h-4 bg-gray-700 rounded col-span-1"></div>
        </div>
    </div>
     <div className="h-px bg-gray-700 w-full"></div>
     <div className="space-y-3 pt-4">
      <div className="h-4 bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
    </div>
  </div>
);

const ResultSection: React.FC<ResultSectionProps> = ({ result, isLoading }) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-lg p-4 sm:p-6 lg:overflow-y-auto h-full min-h-[400px] lg:min-h-0">
      <h2 className="text-lg font-semibold text-gray-200 mb-4">
        Analysis Results
      </h2>
      <div className="prose prose-invert prose-headings:text-gray-100 prose-p:text-gray-300 prose-strong:text-white prose-a:text-brand-primary hover:prose-a:text-brand-accent prose-hr:border-gray-600 prose-table:border prose-th:border-gray-600 prose-td:border-gray-600 max-w-none">
        {isLoading ? (
          <LoadingSkeleton />
        ) : result ? (
          <pre className="whitespace-pre-wrap font-sans text-gray-300">{result}</pre>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="font-semibold">Your analysis will appear here.</p>
            <p className="text-sm">Paste your data on the left and click "Analyze Sentiment".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultSection;

