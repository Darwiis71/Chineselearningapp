import { Volume2, X, Heart } from 'lucide-react';
import { useState } from 'react';

interface AnswerOption {
  chinese: string;
  pinyin: string;
}

export function AudioListeningPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const question = "What do you hear?";
  const duration = "0:05";
  const lives = 5;

  const answerOptions: AnswerOption[] = [
    { chinese: '是', pinyin: 'shì' },
    { chinese: '生', pinyin: 'shēng' },
    { chinese: '不是', pinyin: 'búshì' },
    { chinese: '他', pinyin: 'tā' }
  ];

  const handlePlayAudio = () => {
    setIsPlaying(true);
    // Simulate audio playback
    setTimeout(() => setIsPlaying(false), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-400 to-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button className="p-2">
          <X className="w-6 h-6 text-gray-600" />
        </button>
        
        <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3 overflow-hidden">
          <div className="bg-green-500 h-full w-1/4 rounded-full"></div>
        </div>

        <div className="flex items-center gap-1">
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          <span className="text-red-500 font-bold">{lives}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-between max-w-md mx-auto w-full">
        {/* Question */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{question}</h2>
            <div className="text-sm text-gray-500">{duration}</div>
          </div>

          {/* Audio Button */}
          <div className="flex justify-center mb-12">
            <button
              onClick={handlePlayAudio}
              className={`w-32 h-32 rounded-3xl bg-blue-400 hover:bg-blue-500 transition-all flex items-center justify-center shadow-lg ${
                isPlaying ? 'scale-95' : 'scale-100'
              }`}
            >
              <Volume2 className="w-16 h-16 text-white" />
            </button>
          </div>
        </div>

        {/* Answer Options */}
        <div className="w-full grid grid-cols-2 gap-4 mb-8">
          {answerOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(index)}
              className={`p-6 rounded-2xl border-2 transition-all ${
                selectedAnswer === index
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 bg-white hover:border-gray-400'
              }`}
            >
              <div className="text-3xl font-bold text-gray-800 mb-1">
                {option.chinese}
              </div>
              <div className="text-lg text-blue-500">{option.pinyin}</div>
            </button>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="w-full space-y-3">
          <button className="w-full py-3 text-gray-400 uppercase text-sm tracking-wide">
            Can't listen now
          </button>
          <button
            className={`w-full py-4 rounded-xl font-bold uppercase tracking-wide transition-colors ${
              selectedAnswer !== null
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-300 text-gray-400 cursor-not-allowed'
            }`}
            disabled={selectedAnswer === null}
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
}
