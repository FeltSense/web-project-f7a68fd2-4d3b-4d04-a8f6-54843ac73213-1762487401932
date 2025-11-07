export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0 w-full h-full">
    <img 
      src="https://picsum.photos/1920/1080" 
      alt="Modern gym facility with state-of-the-art equipment" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  {/* Content Overlay */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Transform Your Fitness Journey at GymBros
      </h1>
      <p className="text-xl md:text-2xl text-slate-100 mb-8 max-w-3xl mx-auto leading-relaxed">
        Access 50+ weekly classes including HIIT, Yoga, Strength Training, Boxing, and Spin with certified personal trainers in our state-of-the-art facility
      </p>

      {/* Key Value Props */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
          <div className="text-3xl font-bold text-white mb-2">50+</div>
          <div className="text-slate-100 text-sm">Weekly Classes</div>
          <div className="text-slate-200 text-xs mt-1">HIIT, Yoga, Boxing & More</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
          <div className="text-3xl font-bold text-white mb-2">Certified</div>
          <div className="text-slate-100 text-sm">Personal Trainers</div>
          <div className="text-slate-200 text-xs mt-1">Specialized Expertise</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
          <div className="text-3xl font-bold text-white mb-2">Premium</div>
          <div className="text-slate-100 text-sm">Equipment & Facilities</div>
          <div className="text-slate-200 text-xs mt-1">State-of-the-Art Gear</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 w-full sm:w-auto">
          Start Free Trial
        </button>
        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border-2 border-white/30 transition-all duration-200 w-full sm:w-auto">
          View Class Schedule
        </button>
      </div>

      <p className="text-slate-200 text-sm mt-6">
        No commitment required • Cancel anytime • First week free
      </p>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
    <div className="flex flex-col items-center gap-2 text-white/80">
      <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
      <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</section>
  );
}