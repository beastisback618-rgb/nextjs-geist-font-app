"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: "📊",
    active: true,
  },
  {
    name: "Goals",
    href: "/goals",
    icon: "🎯",
    active: false,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: "📈",
    active: false,
  },
  {
    name: "Challenges",
    href: "/challenges",
    icon: "⚡",
    active: false,
  },
  {
    name: "Community",
    href: "/community",
    icon: "👥",
    active: false,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "⚙️",
    active: false,
  },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 bg-card border-r border-border hidden lg:block",
        className
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo/Brand */}
        <div className="flex h-16 items-center justify-center border-b border-border">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center text-white font-bold">
              L
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              LevelUp Life
            </span>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className={cn(
                "flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:scale-105",
                item.active
                  ? "bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30 neon-glow-blue"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
              {item.active && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-2 h-2 bg-neon-blue rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="border-t border-border p-4">
          <Card className="bg-gradient-to-r from-card to-card/50 border-border/50 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center text-white font-bold">
                U
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  Level 12 Achiever
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  2,847 XP
                </p>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span>Progress to Level 13</span>
                <span>73%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "73%" }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
