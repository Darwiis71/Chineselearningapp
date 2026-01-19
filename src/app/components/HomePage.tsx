import { Volume2, MessageCircle, BarChart3, ChevronRight, Sparkles } from 'lucide-react';

interface CourseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

function CourseCard({ icon: Icon, title, description, color, onClick }: CourseCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left group"
    >
      <div className="flex items-start gap-4">
        <div className={`p-4 ${color} rounded-2xl flex-shrink-0`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition-colors flex-shrink-0 mt-1" />
      </div>
    </button>
  );
}

interface HomePageProps {
  onNavigate: (pageIndex: number) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const courses = [
    {
      icon: Volume2,
      title: 'Audio Listening',
      description: 'Quick multiple choice questions to test your common Chinese words and your memory!',
      color: 'bg-blue-500',
      pageIndex: 1
    },
    {
      icon: MessageCircle,
      title: 'Conversation Practice',
      description: 'Practice real-world conversations with pinyin translations and voice recording to improve your pronunciation!',
      color: 'bg-teal-500',
      pageIndex: 2
    },
    {
      icon: BarChart3,
      title: 'Progress Summary',
      description: 'Track your learning journey with detailed statistics and see how far you\'ve come in your 13-week course!',
      color: 'bg-purple-500',
      pageIndex: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-white p-6">
      <div className="max-w-2xl mx-auto pt-8">
        {/* Welcome Section with Cat Avatar */}
        <div className="mb-12 flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-4xl">
              🐱
            </div>
          </div>
          
          <div className="flex-1 relative">
            {/* Speech Bubble */}
            <div className="bg-white rounded-3xl rounded-tl-sm shadow-lg p-6 relative">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-white transform rotate-45"></div>
              <div className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Welcome Jack!
                  </h2>
                  <p className="text-gray-600">
                    Keep up your practice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Your Learning Path
          </h1>
          <p className="text-gray-700">
            Choose a module to continue your Chinese learning journey
          </p>
        </div>

        {/* Course Cards */}
        <div className="space-y-4 mb-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              icon={course.icon}
              title={course.title}
              description={course.description}
              color={course.color}
              onClick={() => onNavigate(course.pageIndex)}
            />
          ))}
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow">
            <div className="text-2xl font-bold text-purple-600">50%</div>
            <div className="text-xs text-gray-600 mt-1">Complete</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow">
            <div className="text-2xl font-bold text-teal-600">6.5</div>
            <div className="text-xs text-gray-600 mt-1">Weeks Done</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow">
            <div className="text-2xl font-bold text-blue-600">124</div>
            <div className="text-xs text-gray-600 mt-1">Words Learned</div>
          </div>
        </div>
      </div>
    </div>
  );
}
