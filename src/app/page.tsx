"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DailyGoalProgress } from "@/components/DailyGoalProgress";
import { StatsCards } from "@/components/StatsCards";
import { Heatmap } from "@/components/Heatmap";
import { GrowthChart } from "@/components/GrowthChart";
import { BadgeWall } from "@/components/BadgeWall";
import { AdaptiveFeedback } from "@/components/AdaptiveFeedback";
import { Leaderboard } from "@/components/Leaderboard";
import { generateDashboardData, type DashboardData } from "@/lib/utils";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setDashboardData(generateDashboardData());
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !dashboardData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Loading Your Progress</h2>
          <p className="text-gray-400">Preparing your personalized dashboard...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Desktop Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="lg:ml-64">
        <div className="container mx-auto px-4 py-6 lg:px-8">
          {/* Dashboard Header */}
          <DashboardHeader
            motivationalQuote={dashboardData.motivationalQuote}
            aiTip={dashboardData.aiTip}
          />

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column - Primary Metrics */}
            <div className="lg:col-span-8 space-y-6">
              {/* Daily Progress & Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <DailyGoalProgress progress={dashboardData.dailyProgress} />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <StatsCards stats={dashboardData.stats} />
                </motion.div>
              </div>

              {/* Growth Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <GrowthChart data={dashboardData.chartData} />
              </motion.div>

              {/* Heatmap */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Heatmap data={dashboardData.heatmapData} />
              </motion.div>
            </div>

            {/* Right Column - Secondary Metrics */}
            <div className="lg:col-span-4 space-y-6">
              {/* Adaptive Feedback */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <AdaptiveFeedback feedback={dashboardData.adaptiveFeedback} />
              </motion.div>

              {/* Badge Wall */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <BadgeWall badges={dashboardData.badges} />
              </motion.div>

              {/* Leaderboard */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Leaderboard leaderboard={dashboardData.leaderboard} />
              </motion.div>
            </div>
          </div>

          {/* Quick Actions Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <button className="bg-gradient-to-r from-neon-blue to-neon-purple p-4 rounded-2xl text-white font-semibold hover:scale-105 transition-transform duration-200 neon-glow-blue">
              Add New Goal
            </button>
            <button className="bg-gradient-to-r from-neon-purple to-neon-pink p-4 rounded-2xl text-white font-semibold hover:scale-105 transition-transform duration-200 neon-glow-purple">
              Start Focus Session
            </button>
            <button className="bg-gradient-to-r from-neon-green to-neon-cyan p-4 rounded-2xl text-white font-semibold hover:scale-105 transition-transform duration-200 neon-glow-green">
              View Analytics
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
