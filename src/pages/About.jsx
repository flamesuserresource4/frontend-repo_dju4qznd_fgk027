import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-blue-50 min-h-screen text-blue-900">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center">About Us</h1>
        <p className="mt-3 text-center text-blue-900/70 max-w-3xl mx-auto">
          We’re a small team of travel designers crafting calming, beautiful journeys. From the first call to touchdown back home, we obsess over details so your trip feels effortless.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border border-blue-200/60 bg-white/80 p-6 shadow-sm">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-300 to-yellow-200" />
              <h3 className="mt-4 text-xl font-bold">Our Promise {i}</h3>
              <p className="mt-2 text-blue-900/70">Personal attention, tasteful stays, and transparent pricing — always.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
