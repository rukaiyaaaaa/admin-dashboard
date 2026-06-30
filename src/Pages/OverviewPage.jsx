import React from "react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";

import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
function OverviewPage() {
  return (
    <div className=" flex-1 overflow-auto relative z-10">
      <Header title="overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12,325"
            color="#6366F1"
          />
          <StatCard
            name="New Users"
            icon={Users}
            value="12,34"
            color="#8B5CF6"
          />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <StatCard
            name="Convertion Rate"
            icon={BarChart2}
            value="12,5%"
            color="#10B981"
          />
        
        </motion.div>
      </main>
    </div>
  );
}

export default OverviewPage;
