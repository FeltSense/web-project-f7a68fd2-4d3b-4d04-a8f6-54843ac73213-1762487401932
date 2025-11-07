export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Professional Gym Membership Platform
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Complete fitness management solution with everything you need to run a modern gym
      </p>
    </div>
    
    <div className="max-w-md mx-auto">
      <div className="bg-white border-2 border-blue-600 rounded-xl shadow-md p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
          Best Value
        </div>
        
        <div className="mt-4 mb-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">GymBros Complete</h3>
          <p className="text-gray-600 text-sm mb-4">Everything your fitness business needs</p>
          <div className="flex items-baseline">
            <span className="text-5xl font-bold text-slate-900">$29</span>
            <span className="text-gray-600 ml-2">one-time payment</span>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-8">
          <ul className="space-y-4">
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong>50+ Weekly Classes</strong> - HIIT, Yoga, Strength Training, Boxing & Spin scheduling system</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong>Certified Trainer Profiles</strong> - Showcase specialized expertise and credentials</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong>Equipment & Facilities Showcase</strong> - Display state-of-the-art gym features</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong>Flexible Membership Plans</strong> - No long-term contracts, member-friendly options</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong>24/7 Premium Access Portal</strong> - Round-the-clock gym access management system</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong>Community Features</strong> - Build supportive member atmosphere and engagement</span>
            </li>
          </ul>
        </div>
        
        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
          className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Get Started - $29
        </button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          One-time payment • Instant access • No hidden fees
        </p>
      </div>
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-gray-600 text-sm">
        Trusted by fitness professionals • Professional design • Easy to customize
      </p>
    </div>
  </div>
</section>
  );
}