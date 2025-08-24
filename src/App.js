// FILE: src/App.js (Updated)

import React, { Suspense, lazy } from 'react'; // Import Suspense and lazy
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader'; // Import our new Loader

// Dynamically import all page components using React.lazy
const HomePage = lazy(() => import('./pages/HomePage'));
const BeginnerRegistration = lazy(() => import('./pages/BeginnerRegistration'));
const IntermediateRegistration = lazy(() => import('./pages/IntermediateRegistration'));
const AdvancedRegistration = lazy(() => import('./pages/AdvancedRegistration'));
const TutorialsPage = lazy(() => import('./pages/TutorialsPage'));
const ToolsPage = lazy(() => import('./pages/ToolsPage'));

export default function App() {
  return (
    <BrowserRouter>
      {/* Wrap the Routes component with Suspense */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Page Routes */}
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          
          {/* Registration Routes */}
          <Route path="/register/beginner" element={<BeginnerRegistration />} />
          <Route path="/register/intermediate" element={<IntermediateRegistration />} />
          <Route path="/register/advanced" element={<AdvancedRegistration />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
