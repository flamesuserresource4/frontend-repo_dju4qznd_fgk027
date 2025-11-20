export default function Footer() {
  return (
    <footer className="mt-16 border-t border-blue-200/50 bg-white/70">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-blue-900/70">© {new Date().getFullYear()} Pastel Trips. All rights reserved.</p>
        <div className="flex items-center gap-4 text-blue-900/70">
          <a href="#" className="hover:text-blue-900">Instagram</a>
          <a href="#" className="hover:text-blue-900">Twitter</a>
          <a href="#" className="hover:text-blue-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}
