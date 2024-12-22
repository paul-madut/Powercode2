import { Link } from 'react-router-dom'
import { Code, Users, Zap } from 'lucide-react'
import Hero from '@/Components/Hero'
import Contact from '@/Components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-vs-black text-gray-50 ">
        {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center bg-vs-light-gray">
        <h1 className="text-2xl font-bold text-[#2babf1]">PowerCode</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="" className="hover:text-vs-blue transition-colors">Home</Link></li>
            <li><Link to="" className="hover:text-vs-blue transition-colors">About</Link></li>
            <li><Link to="" className="hover:text-vs-blue transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>


      <main className="flex-grow">
      <Hero />
        

        <section className="py-16 px-6 bg-vs-light-gray">
          <h3 className="text-4xl font-bold text-center mb-12">Why Choose PowerCode?</h3>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

            <div className="text-center w-full h-full min-h-[250px] p-8 rounded-[30px] bg-vs-dark-gray shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)]">
              <Code size={48} className="text-vs-blue mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Real-time Challenges</h4>
              <p>Solve coding problems in real-time against other players.</p>
            </div>
            <div className="text-center w-full h-full min-h-[250px] p-8 rounded-[30px] bg-vs-dark-gray shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)]">
              <Users size={48} className="text-vs-blue mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Multiplayer Battles</h4>
              <p>Compete directly with opponents in thrilling coding duels.</p>
            </div>
            <div className="text-center w-full h-full min-h-[250px] p-8 rounded-[30px] bg-vs-dark-gray shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)]">
              <Zap size={48} className="text-vs-blue mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Skill Improvement</h4>
              <p>Enhance your coding skills through friendly competition.</p>
            </div>
          </div>
        </section>
      </main>

      <Contact />

      <footer className="py-6 px-6 text-center border-t border-vs-blue">
        <p>&copy; 2023 PowerCode. All rights reserved.</p>
      </footer>
    </div>
  )
}

