import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const data = [
  { name: 'Aarav', text: 'The calm vibes and seamless planning made this our best vacation yet.', place: 'Bali Escape' },
  { name: 'Maya', text: 'Loved the pastel theme across our stays — everything felt cozy and stylish.', place: 'Santorini Dream' },
  { name: 'Ishaan', text: 'They took care of everything. We just enjoyed and clicked photos!', place: 'Himalayan Sunrise' },
]

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-blue-50 min-h-screen text-blue-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center">Testimonials</h1>
        <p className="mt-2 text-center text-blue-900/70">Words from travelers who explored with us</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {data.map((t) => (
            <div key={t.name} className="rounded-2xl border border-blue-200/60 bg-white/80 p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-yellow-200" />
              <p className="mt-4 text-blue-900/80">“{t.text}”</p>
              <p className="mt-3 font-semibold">{t.name}</p>
              <p className="text-sm text-blue-900/60">{t.place}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
