import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const images = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-blue-50 min-h-screen text-blue-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center">Gallery</h1>
        <p className="mt-2 text-center text-blue-900/70">Soft-toned moments from our favorite trips</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl border border-blue-200/60 bg-white/70 shadow-sm">
              <img src={src} alt="travel" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
