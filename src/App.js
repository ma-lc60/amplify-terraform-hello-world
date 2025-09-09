import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hello LC60! 👋
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to your React app deployed on AWS Amplify
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                🚀 Ready for Production
              </h2>
              <p className="text-blue-700">
                This app is configured for AWS Amplify deployment with automatic CI/CD
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                ⚡ Fast & Scalable
              </h2>
              <p className="text-green-700">
                Built with React and deployed on AWS's global CDN
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Built by Marcelo with React • Deployed with AWS Amplify • Managed by Terraform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}