import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-blue-50 min-h-screen text-blue-900">
      <Navbar />
      <Hero />
      <Features />
      <section className="py-16" id="cta">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-extrabold">Ready to explore?</h3>
          <p className="mt-2 text-blue-900/70 max-w-2xl mx-auto">Tell us your dates and interests — we’ll craft a gentle, beautiful itinerary just for you.</p>
          <a href="#" className="inline-block mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-blue-300 to-yellow-200 text-blue-900 font-semibold shadow hover:shadow-md transition">Start Planning</a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
