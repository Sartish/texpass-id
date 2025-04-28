const Contact = () => {
  return (
    <section id="contact" className="w-full px-4 sm:px-6 md:px-12 py-10 sm:py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Kontakta oss!
        </h2>
        <p className="text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg">
          Anmäl dig idag och få tillgång till evenemang och information om hur du kan använda Texpass ID DPP-lösning för ditt företag.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-gray-600">+46 123 456 789</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-600">hello@texpass.com</span>
          </div>
        </div>
        
        <form className="space-y-3 sm:space-y-4">
          <input
            type="text"
            placeholder="Fullständigt namn"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none"
          />
          <input
            type="email"
            placeholder="E-post"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none"
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-emerald-700 transition-colors text-base sm:text-lg"
          >
            Anmäl dig
          </button>
        </form>
        

      </div>
    </section>
  );
};

export default Contact;
