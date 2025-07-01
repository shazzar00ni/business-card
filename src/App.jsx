
import React from 'react';
import { Helmet } from 'react-helmet';
import BusinessCard from '@/components/BusinessCard';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Virtual Business Card - Interactive & Professional</title>
        <meta name="description" content="Create and customize your interactive virtual business card with flip animations, editable content, and easy sharing capabilities." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <BusinessCard />
        <Toaster />
      </div>
    </>
  );
}

export default App;
