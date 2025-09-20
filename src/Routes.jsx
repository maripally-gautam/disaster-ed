import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AdminDashboard from './pages/admin-dashboard';
import LoginPage from './pages/login';
import DisasterLearningModules from './pages/disaster-learning-modules';
import PreparednessAssessment from './pages/preparedness-assessment';
import VirtualEmergencyDrills from './pages/virtual-emergency-drills';
import RealTimeAlerts from './pages/real-time-alerts';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/disaster-learning-modules" element={<DisasterLearningModules />} />
        <Route path="/preparedness-assessment" element={<PreparednessAssessment />} />
        <Route path="/virtual-emergency-drills" element={<VirtualEmergencyDrills />} />
        <Route path="/real-time-alerts" element={<RealTimeAlerts />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
