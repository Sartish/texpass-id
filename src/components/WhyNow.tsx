const WhyNow = () => {
  const reasons = [
    {
      title: "EU:s regler är på gång",
      description: "Förbered dig idag och ligg steget före konkurrenterna.",
      icon: "🎯"
    },
    {
      title: "Öka din trovärdighet",
      description: "Visa dina kunder att du prioriterar hållbarhet och transparens.",
      icon: "🤝"
    },
    {
      title: "Stärk ditt varumärke",
      description: "Hållbarhet är inte bara en trend – det är framtidens krav.",
      icon: "💪"
    }
  ];

  return (
    <section className="w-full px-6 md:px-12 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Varför ska du agera nu?
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-lg">
          Vår lösning hjälper dig att möta morgondagens utmaningar och möjligheter, 
          oavsett din verksamhets storlek.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
