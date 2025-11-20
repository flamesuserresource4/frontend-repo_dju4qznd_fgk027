export default function Features() {
  const features = [
    {
      title: 'Handpicked Itineraries',
      desc: 'Thoughtfully curated experiences that match your vibe — from serene beaches to mountain sunrises.',
    },
    {
      title: 'Seamless Planning',
      desc: 'We handle bookings, transfers, and guides so you can simply enjoy the journey.',
    },
    {
      title: 'Pastel-Perfect Stays',
      desc: 'Stay in boutique stays with cozy aesthetics and calm color palettes for your comfort.',
    },
  ]

  return (
    <section id="destinations" className="py-16 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center">Why travel with us?</h2>
        <p className="mt-3 text-blue-900/70 text-center max-w-2xl mx-auto">Soft yellow and blue tones guide every detail to make your trip feel as relaxing as it looks.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-blue-200/60 bg-white/80 p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-300 to-yellow-200" />
              <h3 className="mt-4 text-xl font-bold text-blue-900">{f.title}</h3>
              <p className="mt-2 text-blue-900/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
