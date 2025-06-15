'use client';

import { useState } from 'react';

type TabType = 'snv' | 'simswap';

export default function OoredooAPIDemo() {
  const [activeTab, setActiveTab] = useState<TabType>('snv');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    
    try {
      // TODO: Implement actual API calls
      if (activeTab === 'snv') {
        // Simulate SNV API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setResult('Number verified successfully');
      } else {
        // Simulate SIM Swap API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setResult('SIM Swap status: Not swapped in last 24 hours');
      }
    } catch (error) {
      setResult('Error occurred while processing request, ' + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Ooredoo Header */}
        <div className="bg-[#E2001A] text-white p-4 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Ooredoo Developer APIs</h1>
              <p className="text-sm opacity-90">Silent Number Verification & SIM Swap Detection</p>
            </div>
            <div className="w-32 h-12 bg-white rounded flex items-center justify-center">
              <span className="text-[#E2001A] font-bold text-xl">Ooredoo</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('snv')}
                className={`flex-1 py-3 px-6 text-center font-medium text-sm ${
                  activeTab === 'snv'
                    ? 'border-b-2 border-[#E2001A] text-[#E2001A]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Silent Number Verification
              </button>
              <button
                onClick={() => setActiveTab('simswap')}
                className={`flex-1 py-3 px-6 text-center font-medium text-sm ${
                  activeTab === 'simswap'
                    ? 'border-b-2 border-[#E2001A] text-[#E2001A]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                SIM Swap Detection
              </button>
            </nav>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Benefits */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {activeTab === 'snv' ? 'Key Benefits' : 'Security Features'}
                  </h3>
                  <div className="space-y-4">
                    {activeTab === 'snv' ? (
                      <>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#E2001A] bg-opacity-10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#E2001A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Seamless Verification</h4>
                            <p className="text-sm text-gray-600">No SMS or OTP required for verification</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#E2001A] bg-opacity-10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#E2001A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Enhanced Security</h4>
                            <p className="text-sm text-gray-600">Real-time number ownership verification</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#E2001A] bg-opacity-10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#E2001A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Instant Results</h4>
                            <p className="text-sm text-gray-600">Quick verification with minimal latency</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#E2001A] bg-opacity-10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#E2001A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Fraud Prevention</h4>
                            <p className="text-sm text-gray-600">Detect potential SIM swap fraud attempts</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#E2001A] bg-opacity-10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#E2001A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">24/7 Monitoring</h4>
                            <p className="text-sm text-gray-600">Continuous SIM swap activity tracking</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#E2001A] bg-opacity-10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#E2001A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Real-time Alerts</h4>
                            <p className="text-sm text-gray-600">Immediate notification of SIM swap events</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Form and Mobile Device */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Form */}
                  <div>
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        {activeTab === 'snv' ? 'Silent Number Verification' : 'SIM Swap Detection'}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        {activeTab === 'snv'
                          ? 'Verify mobile numbers silently for OTT applications'
                          : 'Check if a mobile number has been swapped in the last 24 hours'}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Mobile Number
                        </label>
                        <div className="relative rounded-md shadow-sm">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter mobile number"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2001A] focus:border-[#E2001A] outline-none transition-colors"
                            pattern="[0-9]{10}"
                            required
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Enter a 10-digit mobile number
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#E2001A] hover:bg-[#cc0017] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E2001A] transition-colors ${
                          isLoading ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                      >
                        {isLoading ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          activeTab === 'snv' ? 'Verify Number' : 'Check SIM Swap Status'
                        )}
                      </button>
                    </form>

                    {result && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Result:</h3>
                        <p className="text-gray-700">{result}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile Device Visualization */}
                  <div className="relative mx-auto w-64 h-[400px] bg-gray-900 rounded-[40px] p-4 shadow-xl">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
                    <div className="h-full bg-white rounded-[32px] overflow-hidden">
                      <div className="h-full flex flex-col">
                        <div className="bg-[#E2001A] text-white p-4">
                          <h3 className="text-center font-semibold">
                            {activeTab === 'snv' ? 'Silent Verification' : 'SIM Swap Check'}
                          </h3>
                        </div>
                        <div className="flex-1 p-4 bg-gray-50">
                          <div className="space-y-4">
                            <div className="bg-white p-3 rounded-lg shadow">
                              <p className="text-sm text-gray-600">Number: {phoneNumber || 'Enter number'}</p>
                            </div>
                            {result && (
                              <div className="bg-white p-3 rounded-lg shadow">
                                <p className="text-sm text-gray-600">{result}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
