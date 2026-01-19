import { useState } from 'react';
import { HomePage } from '@/app/components/HomePage';
import { AudioListeningPage } from '@/app/components/AudioListeningPage';
import { ConversationPage } from '@/app/components/ConversationPage';
import { ProgressPage } from '@/app/components/ProgressPage';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { name: 'Home', component: <HomePage onNavigate={setCurrentPage} /> },
    { name: 'Audio Listening', component: <AudioListeningPage /> },
    { name: 'Conversation Practice', component: <ConversationPage /> },
    { name: 'Progress Report', component: <ProgressPage /> }
  ];

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="relative size-full">
      {/* Current Page */}
      {pages[currentPage].component}

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
        <button
          onClick={goToPreviousPage}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Home Button */}
        <button
          onClick={() => setCurrentPage(0)}
          className={`p-2 hover:bg-gray-100 rounded-full transition-colors ${
            currentPage === 0 ? 'bg-purple-100' : ''
          }`}
          aria-label="Go to home"
        >
          <Home className="w-5 h-5 text-gray-700" />
        </button>

        <div className="flex items-center gap-2">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`transition-all ${
                index === currentPage
                  ? 'w-8 h-2 bg-purple-500'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              } rounded-full`}
              aria-label={`Go to ${page.name}`}
            />
          ))}
        </div>

        <button
          onClick={goToNextPage}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Page Title Indicator */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
        <span className="text-sm font-medium text-gray-700">
          {pages[currentPage].name}
        </span>
      </div>
    </div>
  );
}