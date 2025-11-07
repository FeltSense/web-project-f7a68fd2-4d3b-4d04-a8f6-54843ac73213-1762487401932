export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Everything You Need to Reach Your Goals
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        World-class facilities, expert trainers, and flexible programs designed to fit your lifestyle and fitness journey.
      </p>
    </div>

    {/* 4-Column Service Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Service Card 1 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          50+ Weekly Classes
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          HIIT, Yoga, Strength Training, Boxing, and Spin classes scheduled throughout the day to match your availability.
        </p>
      </div>

      {/* Service Card 2 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Certified Trainers
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Expert personal trainers with specialized certifications in nutrition, rehabilitation, and performance training.
        </p>
      </div>

      {/* Service Card 3 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          State-of-the-Art Equipment
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Premium cardio machines, free weights, resistance equipment, and dedicated functional training zones.
        </p>
      </div>

      {/* Service Card 4 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Flexible Memberships
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Month-to-month plans with no long-term contracts. Pause or cancel anytime with complete flexibility.
        </p>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-12">
      <a
        href="#membership"
        className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200"
      >
        View Membership Options
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</section>
  );
}