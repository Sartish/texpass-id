const Benefits = () => {
  const benefits = [
    {
      title: 'Seamless integration',
      description: 'Through integration with existing systems, you will be able to share with just a click all DPP content you want to share',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: 'bg-red-50'
    },
    {
      title: 'Fully customizable',
      description: 'Possible to tailor the solution to fit your specific requirements and production context',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'No Code Needed',
      description: 'Zero coding skills required. Thanks to our user-friendly interface, you can create and manage your DPP without any technical knowledge.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <section className="w-full px-6 md:px-12 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          We help you navigate DPP
        </h2>
        <p className="text-gray-600 text-center mb-12">
          These are just a few features you will get using texpass Page id Kit
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
