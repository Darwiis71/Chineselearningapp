import { Volume2, Mic, Check, Headphones } from 'lucide-react';
import { useState } from 'react';

interface DialogueLine {
  speaker: 'person1' | 'person2';
  chinese: string;
  pinyin: string;
  english: string;
  avatar: string;
}

export function ConversationPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);

  const dialogue: DialogueLine[] = [
    {
      speaker: 'person1',
      chinese: '今天天气怎么样？',
      pinyin: 'jīn tiān tiān qì zěn me yàng',
      english: "What's the weather like today?",
      avatar: '👨'
    },
    {
      speaker: 'person2',
      chinese: '今天上午晴天，下午下雨。',
      pinyin: 'jīn tiān shàng wǔ qíng tiān xià wǔ xià yǔ',
      english: 'Today it will be cloudy in the morning, it will rain in the afternoon.',
      avatar: '👩'
    },
    {
      speaker: 'person1',
      chinese: '下午什么时候下雨？',
      pinyin: 'xià wǔ shén me shí hòu xià yǔ',
      english: 'When will it rain in the afternoon?',
      avatar: '👨'
    }
  ];

  const handleRecord = () => {
    setIsRecording(true);
    // Simulate recording
    setTimeout(() => {
      setIsRecording(false);
      setRecordingComplete(true);
    }, 2000);
  };

  const handlePlayAudio = (index: number) => {
    // Simulate audio playback
    console.log(`Playing audio for line ${index}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-400 to-white p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-teal-500 text-lg">🔋</div>
          <div className="flex items-center gap-2">
            <span className="text-teal-500 text-sm">⚙️</span>
            <span className="text-teal-500 text-sm">⚡</span>
          </div>
        </div>
        <div className="bg-teal-500 h-1.5 rounded-full mb-4"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-gray-500 text-sm mb-2">Complete the dialogue</h2>
        <p className="text-gray-600 text-sm">Two people are talking about today's weather.</p>
      </div>

      {/* Dialogue */}
      <div className="flex-1 space-y-4 mb-6">
        {dialogue.map((line, index) => (
          <div
            key={index}
            className={`flex gap-3 ${
              line.speaker === 'person2' ? 'justify-start' : 'justify-start'
            }`}
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-blue-200 flex items-center justify-center text-2xl">
                {line.avatar}
              </div>
            </div>

            {/* Message */}
            <div className="flex-1 max-w-sm">
              <div
                className={`p-4 rounded-2xl ${
                  line.speaker === 'person1' ? 'bg-blue-100' : 'bg-orange-100'
                }`}
              >
                <button
                  onClick={() => handlePlayAudio(index)}
                  className="mb-2"
                >
                  <Volume2 className="w-5 h-5 text-teal-500" />
                </button>
                
                <div className="text-lg font-medium text-gray-800 mb-1">
                  {line.chinese}
                </div>
                <div className="text-sm text-blue-500 mb-2">
                  {line.pinyin}
                </div>
                <div className="text-sm text-gray-600">
                  {line.english}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex gap-4 justify-center items-center pb-6">
        <button className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 transition-colors">
            <Headphones className="w-8 h-8 text-white" />
          </div>
          <span className="text-sm text-teal-600 font-medium">PLAY</span>
        </button>

        <button
          onClick={handleRecord}
          className="flex flex-col items-center gap-2"
        >
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
              isRecording
                ? 'bg-red-500 animate-pulse'
                : 'bg-teal-500 hover:bg-teal-600'
            }`}
          >
            <Mic className="w-8 h-8 text-white" />
          </div>
          <span className="text-sm text-teal-600 font-medium">
            {isRecording ? 'RECORDING...' : 'REDO'}
          </span>
        </button>

        <button
          className={`flex flex-col items-center gap-2 ${
            recordingComplete ? 'opacity-100' : 'opacity-50'
          }`}
          disabled={!recordingComplete}
        >
          <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 transition-colors">
            <Check className="w-8 h-8 text-white" />
          </div>
          <span className="text-sm text-teal-600 font-medium">FINISH</span>
        </button>
      </div>
    </div>
  );
}
