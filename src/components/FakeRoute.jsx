import React from 'react';

const FakeRoute = ({ title, icon: Icon, description }) => {
  return (
    <div className="flex flex-col items-center mt-20  bg-zinc-900 text-white">
      <div className="text-center px-8 max-w-2xl">
        {/* Icon */}
        <div className="mb-8">
          <Icon size={80} className="text-red-500 mx-auto" />
        </div>
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-white">
          {title}
        </h1>
        
        {/* Messages */}
        <div className="space-y-4 mb-8">
          <p className="text-2xl font-semibold text-gray-300">
            Oops! Nothing to display
          </p>
          <p className="text-xl text-gray-400">
            This page is under construction
          </p>
          <p className="text-lg text-gray-500">
            {description}
          </p>
        </div>
        
        {/* Simple loading dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default FakeRoute;
