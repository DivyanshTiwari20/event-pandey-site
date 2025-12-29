import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, Star, Heart, Briefcase, Mic, ArrowRight, Check, Plus, Minus, Instagram, Twitter, Facebook, Send } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import BookingForm from './components/BookingForm';
import { PricingTier, FaqItem } from './types';

// --- Components ---

const Navbar: React.FC<{ onBook: () => void }> = ({ onBook }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white border-b-4 border-black">
    <div className="flex items-center gap-2" data-hover="true">
      <div className="w-10 h-10 bg-neo-yellow border-2 border-black flex items-center justify-center text-black font-black text-xl shadow-neo-hover">E</div>
      <span className="font-black text-2xl tracking-tighter uppercase">Event Pandey</span>
    </div>
    <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
      {['About', 'Services', 'Pricing', 'Planning', 'FAQ'].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:bg-neo-pink hover:text-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black hover:shadow-neo-hover" data-hover="true">
          {item}
        </a>
      ))}
    </div>
    <button 
      onClick={onBook}
      className="bg-black text-white px-6 py-2 font-black text-sm uppercase tracking-widest border-2 border-black hover:bg-neo-green hover:text-black hover:shadow-neo transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      data-hover="true"
    >
      Book Now
    </button>
  </nav>
);

const Hero: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "circOut" }}
        >
          <div className="inline-block px-6 py-3 bg-neo-yellow border-2 border-black font-black text-sm tracking-widest uppercase mb-8 shadow-neo">
            NO BORING EVENTS ALLOWED
          </div>
          <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter mb-10 text-black uppercase">
            Make Life <br />
            <span className="text-white bg-black px-4 italic font-serif">
              Legendary
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl font-bold border-l-8 border-neo-pink pl-6 text-left md:text-center md:border-l-0 md:border-b-8 md:pb-4 md:pl-0 mb-12 bg-white/80 backdrop-blur-sm p-4 border-4 border-transparent md:border-0 rounded-sm">
            We don't do subtle. We do bold, loud, and flawlessly executed chaos. Weddings, corporate, political – we handle the stress, you take the credit.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button 
              onClick={onBook}
              className="bg-neo-pink text-black border-4 border-black px-10 py-5 font-black text-xl uppercase tracking-wider hover:bg-pink-400 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-neo-lg transition-all active:translate-x-[0px] active:translate-y-[0px] active:shadow-none shadow-neo"
              data-hover="true"
            >
              Start Planning
            </button>
            <a 
              href="#planning"
              className="bg-white text-black border-4 border-black px-10 py-5 font-black text-xl uppercase tracking-wider hover:bg-gray-100 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-neo-lg transition-all active:translate-x-[0px] active:translate-y-[0px] active:shadow-none shadow-neo"
              data-hover="true"
            >
              Get Offer
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About: React.FC = () => (
  <section id="about" className="py-24 bg-neo-yellow border-t-4 border-b-4 border-black relative">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="border-4 border-black shadow-neo-lg bg-white p-2 rotate-[-3deg]">
           <img src="https://picsum.photos/800/800?random=3" alt="Team" className="w-full aspect-square object-cover border-2 border-black grayscale contrast-125 hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="absolute -bottom-10 -right-5 bg-neo-blue border-4 border-black p-6 shadow-neo rotate-3">
          <p className="font-black text-xl uppercase mb-2">"Chaos Managed."</p>
          <div className="flex gap-1 text-black"><Star fill="black" size={20} /><Star fill="black" size={20} /><Star fill="black" size={20} /><Star fill="black" size={20} /><Star fill="black" size={20} /></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-none">We Are <br/><span className="text-white bg-black px-2">Event Pandey</span></h2>
        <p className="font-bold text-xl mb-8 leading-relaxed">
          You want a party? We give you a production. We are a team of detail-obsessed planners who believe that "good enough" is a crime.
        </p>
        <ul className="space-y-4 mb-8">
          {[
            'Aggressive Timeline Management',
            'Ruthless Vendor Negotiation',
            'Zero Tolerance for Boring',
            'Snow Machine Experts (Seriously)'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-4 font-bold text-lg border-b-2 border-black pb-2">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-sm">{i + 1}</div>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

const Services: React.FC = () => {
  const services = [
    {
      id: 'wedding',
      title: 'Weddings',
      icon: <Heart className="w-8 h-8 text-black" />,
      desc: 'Not your grandma\'s wedding. Unless she likes pyrotechnics.',
      img: 'https://picsum.photos/400/300?random=4',
      bg: 'bg-neo-pink'
    },
    {
      id: 'corporate',
      title: 'Corporate',
      icon: <Briefcase className="w-8 h-8 text-black" />,
      desc: 'Team building that doesn\'t make you want to quit.',
      img: 'https://picsum.photos/400/300?random=5',
      bg: 'bg-neo-blue'
    },
    {
      id: 'political',
      title: 'Political',
      icon: <Mic className="w-8 h-8 text-black" />,
      desc: 'Campaign rallies with better lighting than a rock concert.',
      img: 'https://picsum.photos/400/300?random=6',
      bg: 'bg-neo-orange'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="border-l-8 border-black pl-8 mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-2 uppercase">What We Do</h2>
          <p className="text-xl font-bold bg-neo-green inline-block px-2">Whatever you want. As long as it's loud.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border-4 border-black shadow-neo bg-white group cursor-pointer hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all`}
              data-hover="true"
            >
              <div className="h-48 overflow-hidden border-b-4 border-black relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className={`p-8 ${service.bg} h-full`}>
                <div className="bg-white w-16 h-16 border-2 border-black flex items-center justify-center shadow-neo-hover mb-6">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-black mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="font-bold mb-6">{service.desc}</p>
                <div className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider border-b-2 border-black pb-1 hover:pb-2 transition-all">
                  Read Details <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const USP: React.FC = () => (
  <section className="py-24 bg-black text-white relative overflow-hidden border-t-4 border-b-4 border-white">
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-widest bg-white text-black inline-block p-4 transform -rotate-2 mx-auto block w-fit border-4 border-neo-pink shadow-[8px_8px_0px_0px_#FF90E8]">Why Event Pandey?</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { number: '500+', label: 'Events Curated' },
          { number: '100%', label: 'Stress Removed' },
          { number: '24/7', label: 'Support Team' },
          { number: '∞', label: 'High Fives' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="p-6 border-4 border-white bg-black hover:bg-white hover:text-black transition-colors group text-center"
          >
            <div className="text-6xl font-black mb-2 text-neo-green group-hover:text-black font-sans">{stat.number}</div>
            <div className="font-bold uppercase tracking-widest text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing: React.FC = () => {
  const plans: PricingTier[] = [
    {
      name: 'Basic',
      price: '$2,500',
      features: ['Vendor coordination', 'Day-of management', 'Timeline creation', '1 Planner'],
    },
    {
      name: 'Pro',
      price: '$5,000',
      features: ['Full styling & design', 'Vendor negotiation', 'Budget management', '2 Planners', 'Snow Machine ❄️'],
      recommended: true,
    },
    {
      name: 'Mega',
      price: '$8.5k+',
      features: ['Complete bespoke design', 'Destination management', 'Unlimited meetings', 'Full Team', 'Custom Installations'],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-neo-blue border-b-4 border-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-16 text-white text-stroke-black uppercase">Packages</h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 border-4 border-black ${plan.recommended ? 'bg-neo-yellow shadow-neo-lg scale-105 z-10' : 'bg-white shadow-neo'} relative`}
            >
              {plan.recommended && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 border-2 border-white font-black uppercase text-sm shadow-neo">
                  The Best One
                </div>
              )}
              <h3 className="text-3xl font-black mb-2 uppercase">{plan.name}</h3>
              <div className="text-5xl font-black mb-6 border-b-4 border-black pb-4">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-bold">
                    <div className="w-5 h-5 bg-black flex items-center justify-center text-white"><Check size={14} /></div> {f}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-4 font-black uppercase tracking-wider border-2 border-black transition-all shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] ${plan.recommended ? 'bg-white hover:bg-black hover:text-white' : 'bg-neo-green hover:bg-black hover:text-white'}`}
                data-hover="true"
              >
                Pick {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OfferPlanning: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitted');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="planning" className="py-24 bg-neo-pink border-b-4 border-black relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-neo-yellow border-4 border-black rounded-full shadow-neo hidden md:block"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-neo-blue border-4 border-black rotate-12 shadow-neo hidden md:block"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-block bg-black text-white px-4 py-2 font-black uppercase text-sm mb-4 border-2 border-transparent transform -rotate-2">
              Limited Availability
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6 uppercase leading-[0.9] text-black">
              Let's Plan <br/>
              <span className="text-white text-stroke-black bg-black px-2">The Chaos</span>
            </h2>
            <p className="text-xl font-bold mb-8 border-l-4 border-black pl-6">
              Skip the email tag. Fill out this form, and we'll send you a custom event blueprint that will blow your mind (and your budget... in a good way).
            </p>
            <div className="flex gap-4">
              <div className="p-4 bg-white border-4 border-black shadow-neo font-bold text-sm uppercase">
                Free Consultation
              </div>
              <div className="p-4 bg-neo-green border-4 border-black shadow-neo font-bold text-sm uppercase">
                Instant Clout
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black shadow-neo-lg p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              {status === 'submitted' ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-neo-green border-4 border-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} className="text-black" />
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-2">Received!</h3>
                  <p className="font-bold">We're sharpening our pencils.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">Get A Quote</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-black uppercase tracking-widest mb-1 block">Your Name</label>
                      <input type="text" required className="w-full p-3 bg-gray-50 border-2 border-black focus:ring-0 focus:bg-neo-yellow/20 outline-none transition-colors" placeholder="NAME" />
                    </div>
                    <div>
                      <label className="text-xs font-black uppercase tracking-widest mb-1 block">Email</label>
                      <input type="email" required className="w-full p-3 bg-gray-50 border-2 border-black focus:ring-0 focus:bg-neo-yellow/20 outline-none transition-colors" placeholder="EMAIL" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest mb-1 block">Event Type</label>
                    <select className="w-full p-3 bg-gray-50 border-2 border-black focus:ring-0 focus:bg-neo-yellow/20 outline-none transition-colors appearance-none">
                      <option>Wedding</option>
                      <option>Corporate Gala</option>
                      <option>Birthday Bash</option>
                      <option>Political Rally</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest mb-1 block">Budget (Optional)</label>
                    <input type="text" className="w-full p-3 bg-gray-50 border-2 border-black focus:ring-0 focus:bg-neo-yellow/20 outline-none transition-colors" placeholder="$10,000+" />
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest mb-1 block">Vision</label>
                    <textarea rows={3} className="w-full p-3 bg-gray-50 border-2 border-black focus:ring-0 focus:bg-neo-yellow/20 outline-none transition-colors resize-none" placeholder="Describe your dream event..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-black text-white font-black uppercase tracking-wider hover:bg-neo-blue hover:text-black hover:border-black border-2 border-transparent transition-all flex items-center justify-center gap-2 group">
                    Send Request <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const items: FaqItem[] = [
    { question: "Real snow indoors?", answer: "Yes. Bio-degradable. Non-toxic. Looks awesome. Feels cold. We bring the machines, you bring the coats." },
    { question: "Destination weddings?", answer: "We travel. You pay. We make it look like a movie. Simple." },
    { question: "Cancellation policy?", answer: "Reschedule up to 30 days out. Cancel completely? We keep the deposit to buy more confetti." },
    { question: "Do you do food?", answer: "We know people who do food. Good food. We coordinate them. We don't cook." }
  ];
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-5xl font-black mb-12 text-center uppercase">Questions?</h2>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white border-4 border-black shadow-neo">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full flex justify-between items-center p-6 text-left transition-colors ${openIndex === i ? 'bg-black text-white' : 'hover:bg-gray-50'}`}
                data-hover="true"
              >
                <span className="font-black text-xl uppercase tracking-tight">{item.question}</span>
                {openIndex === i ? <Minus size={24} /> : <Plus size={24} />}
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0 }}
                className="overflow-hidden bg-white"
              >
                <div className="p-6 text-black font-bold text-lg border-t-2 border-black">
                  {item.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-black text-white border-t-4 border-neo-green py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-black text-2xl border-2 border-neo-pink shadow-[4px_4px_0px_0px_#FF90E8]">E</div>
          <span className="font-black text-3xl tracking-tighter uppercase">Event Pandey</span>
        </div>
        <div className="flex gap-6">
          <Instagram className="cursor-pointer hover:text-neo-pink transition-colors" data-hover="true" />
          <Twitter className="cursor-pointer hover:text-neo-blue transition-colors" data-hover="true" />
          <Facebook className="cursor-pointer hover:text-neo-blue transition-colors" data-hover="true" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 font-bold text-sm border-t border-gray-800 pt-8">
        <p>&copy; 2024 Event Pandey. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-widest">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen relative selection:bg-neo-yellow selection:text-black bg-white">
      <CustomCursor />
      <Navbar onBook={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onBook={() => setIsBookingOpen(true)} />
        <About />
        <Services />
        <Pricing />
        <USP />
        <OfferPlanning />
        <FAQ />
      </main>

      <Footer />
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default App;