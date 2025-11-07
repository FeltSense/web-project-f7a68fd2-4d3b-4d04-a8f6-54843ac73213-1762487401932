export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Trusted by Thousands of Members
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Real stories from real people who transformed their lives at GymBros
      </p>
    </div>

    <div className="relative h-[500px] perspective-1000">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Card 1 - Front Center */}
        <div className="absolute w-full max-w-md transform transition-all duration-700 hover:scale-105 z-30">
          <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-xl">
                MJ
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-slate-900">Michael Johnson</h3>
                <p className="text-sm text-slate-600">Software Engineer</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed">
              "Lost 35 pounds in 4 months with the personalized training program. The trainers actually care about your progress and adjust workouts based on your goals. Best investment I've made in my health."
            </p>
          </div>
        </div>

        {/* Card 2 - Left Back */}
        <div className="absolute w-full max-w-md transform -translate-x-80 -translate-y-8 rotate-[-8deg] scale-90 opacity-60 transition-all duration-700 hover:opacity-80 hover:scale-95 z-20">
          <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-xl">
                SC
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-slate-900">Sarah Chen</h3>
                <p className="text-sm text-slate-600">Marketing Director</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed">
              "The group classes are incredible. I've tried 5 different gyms and GymBros has the most supportive community. The early morning HIIT sessions fit perfectly into my schedule."
            </p>
          </div>
        </div>

        {/* Card 3 - Right Back */}
        <div className="absolute w-full max-w-md transform translate-x-80 -translate-y-8 rotate-[8deg] scale-90 opacity-60 transition-all duration-700 hover:opacity-80 hover:scale-95 z-20">
          <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-xl">
                DR
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-slate-900">David Rodriguez</h3>
                <p className="text-sm text-slate-600">Small Business Owner</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed">
              "Finally found a gym that's open 24/7 with equipment that actually works. The app makes it easy to track my workouts and the nutrition coaching helped me gain 15 pounds of muscle."
            </p>
          </div>
        </div>

        {/* Card 4 - Far Back Center */}
        <div className="absolute w-full max-w-md transform translate-y-12 scale-75 opacity-40 transition-all duration-700 hover:opacity-60 z-10">
          <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-xl">
                EP
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-slate-900">Emily Parker</h3>
                <p className="text-sm text-slate-600">Registered Nurse</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed">
              "Working night shifts made it hard to find gym time. GymBros' flexible hours and clean facilities are perfect. The recovery zone with massage chairs is a game-changer after long shifts."
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-16">
      <div className="inline-flex items-center space-x-8 text-slate-600">
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">4.9/5</div>
          <div className="text-sm">Average Rating</div>
        </div>
        <div className="h-12 w-px bg-slate-300"></div>
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">12,000+</div>
          <div className="text-sm">Happy Members</div>
        </div>
        <div className="h-12 w-px bg-slate-300"></div>
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">98%</div>
          <div className="text-sm">Would Recommend</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}