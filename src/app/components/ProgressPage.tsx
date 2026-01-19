import { Progress } from '@/app/components/ui/progress';
import { Trophy, Target, Calendar, TrendingUp } from 'lucide-react';

export function ProgressPage() {
  const totalWeeks = 13;
  const completedWeeks = 6.5;
  const progressPercentage = (completedWeeks / totalWeeks) * 100;
  const weeksRemaining = totalWeeks - completedWeeks;

  const stats = [
    { label: 'Total Duration', value: `${totalWeeks} weeks`, icon: Calendar },
    { label: 'Completed', value: `${completedWeeks} weeks`, icon: TrendingUp },
    { label: 'Remaining', value: `${weeksRemaining} weeks`, icon: Target },
    { label: 'Progress', value: `${progressPercentage.toFixed(1)}%`, icon: Trophy }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-400 to-white p-6">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
            <Trophy className="w-12 h-12 text-purple-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Course Progress
          </h1>
          <p className="text-gray-600">Keep up the great work!</p>
        </div>

        {/* Main Progress Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-3">
              <h2 className="text-2xl font-bold text-gray-800">
                Overall Completion
              </h2>
              <span className="text-3xl font-bold text-purple-500">
                {progressPercentage.toFixed(0)}%
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative">
              <Progress value={progressPercentage} className="h-6" />
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-gray-600">Week 0</span>
                <span className="text-gray-600">Week {totalWeeks}</span>
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-purple-50 rounded-2xl p-6 mb-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">
                {completedWeeks}
              </div>
              <div className="text-gray-700 font-medium">
                Weeks Completed
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-400 mb-2">
                {weeksRemaining}
              </div>
              <div className="text-gray-600 font-medium">
                Weeks Remaining
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Icon className="w-5 h-5 text-purple-500" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Encouragement Message */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-700 text-lg">
            🎯 You're halfway there! Keep practicing to complete your Chinese learning journey.
          </p>
        </div>
      </div>
    </div>
  );
}
