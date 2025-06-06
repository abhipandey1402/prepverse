import { ArrowRight, Target } from 'lucide-react'
import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <div className="relative bg-blue-950 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-blue-950 transform -skew-y-6 origin-top-left"></div>
            <div className="container mx-auto px-4 py-20 md:py-28 relative">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <div className="inline-block px-3 py-1 bg-blue-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                            LeetCode Mastery Platform
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Master LeetCode with <span className="text-orange-600 relative">
                                AI Analysis
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 rounded-full"></span>
                            </span> & Challenge Bets
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Track progress, get personalized AI reports, and stay motivated with friendly bet challenges. Elevate your coding interview preparation.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg shadow-md hover:bg-white hover:text-neutral-950 transition-colors flex items-center justify-center">
                                Connect LeetCode <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            {/* <button className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center">
                                See How It Works
                            </button> */}
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-neutral-800 rounded-xl transform rotate-3"></div>
                            <div className="relative bg-blue-950 p-6 rounded-xl shadow-lg border border-gray-200">
                                <div className="flex items-center space-x-2 border-b border-gray-200 pb-4 mb-4">
                                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                                    <div className="ml-2 text-sm text-gray-100 font-mono">Arrays & Hashing Progress</div>
                                </div>
                                <div className="bg-gray-100 p-4 rounded text-sm">
                                    <div className="mb-3">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-700 font-medium">Topic Progress</span>
                                            <span className="text-blue-600 font-medium">8/10 Completed</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                                            <span>Strengths</span>
                                            <span>Weaknesses</span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Hash Tables</div>
                                            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Array Traversal</div>
                                            <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Space Optimization</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-xs text-gray-600">
                                        <div className="font-medium text-gray-800 mb-1">AI Recommendation:</div>
                                        <p>Focus on one-pass solutions and space complexity optimization. Try "Longest Consecutive Sequence" next to challenge your hash table skills.</p>
                                    </div>
                                </div>
                                <div className="mt-4 bg-green-100 p-3 rounded-lg border border-green-100">
                                    <div className="text-sm font-semibold text-green-800 mb-1 flex items-center">
                                        <Target className="h-4 w-4 mr-1" /> Daily Challenge Bet
                                    </div>
                                    <div className="text-sm text-green-700 flex justify-between items-center">
                                        <div>
                                            <div className="font-medium">Complete 3 Array Problems</div>
                                            <div className="text-xs">With Alex Chen · $50 bet</div>
                                        </div>
                                        <div className="text-xs bg-orange-600 text-white px-2 py-1 rounded">
                                            Due in 8 hours
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection