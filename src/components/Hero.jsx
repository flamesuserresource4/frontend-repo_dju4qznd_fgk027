import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-200/70 text-blue-900 text-sm font-semibold shadow">
            Explore the world in pastel hues
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-blue-900">
            Dreamy tours and travels in soft yellow and blue
          </h1>
          <p className="mt-4 text-blue-900/80 text-lg">
            Curated journeys, cozy stays, and unforgettable memories. Designed with a calm, modern aesthetic.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#destinations" className="px-5 py-3 rounded-md bg-blue-300 text-blue-900 font-semibold shadow hover:shadow-md transition">Browse Trips</a>
            <a href="#contact" className="px-5 py-3 rounded-md bg-yellow-200 text-blue-900 font-semibold shadow hover:shadow-md transition">Plan With Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
