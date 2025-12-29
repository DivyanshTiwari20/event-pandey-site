import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookingFormData } from '../types';
import { X, Calendar, Users, Type, CheckCircle } from 'lucide-react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    eventType: 'wedding',
    date: '',
    guestCount: 50,
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neo-yellow/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="bg-white border-4 border-black shadow-neo-lg w-full max-w-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-neo-pink border-2 border-black hover:bg-pink-400 transition-colors shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              data-hover="true"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {step === 'form' ? (
                <>
                  <h2 className="text-4xl font-black mb-2 uppercase tracking-tighter">Book It.</h2>
                  <p className="font-bold mb-6 text-gray-600 border-b-4 border-black pb-4 inline-block">Let's make some noise.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-widest">Name</label>
                        <input
                          required
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 bg-white border-2 border-black focus:ring-0 focus:bg-neo-yellow/20 focus:shadow-neo transition-all outline-none"
                          placeholder="JANE DOE"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-widest">Phone</label>
                        <input
                          required
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 bg-white border-2 border-black focus:ring-0 focus:bg-neo-yellow/20 focus:shadow-neo transition-all outline-none"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase tracking-widest">Email</label>
                      <input
                        required
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-white border-2 border-black focus:ring-0 focus:bg-neo-yellow/20 focus:shadow-neo transition-all outline-none"
                        placeholder="JANE@EXAMPLE.COM"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-widest flex items-center gap-1">
                           <Type size={12} /> Event Type
                        </label>
                        <div className="relative">
                          <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full p-3 bg-white border-2 border-black focus:ring-0 focus:shadow-neo transition-all appearance-none outline-none"
                          >
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate</option>
                            <option value="political">Political</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">▼</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                         <label className="text-xs font-black uppercase tracking-widest flex items-center gap-1">
                           <Calendar size={12} /> Date
                        </label>
                        <input
                          required
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full p-3 bg-white border-2 border-black focus:ring-0 focus:shadow-neo transition-all outline-none"
                        />
                      </div>
                    </div>

                     <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-widest flex items-center gap-1">
                           <Users size={12} /> Guest Count
                        </label>
                        <input
                          required
                          name="guestCount"
                          type="number"
                          min="1"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full p-3 bg-white border-2 border-black focus:ring-0 focus:shadow-neo transition-all outline-none"
                        />
                      </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase tracking-widest">Notes</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full p-3 bg-white border-2 border-black focus:ring-0 focus:shadow-neo transition-all h-24 resize-none outline-none"
                        placeholder="TELL US ABOUT THE VIBE..."
                      />
                    </div>

                    <button
                      type="submit"
                      data-hover="true"
                      className="w-full py-4 bg-black text-white font-black text-xl uppercase tracking-wider border-2 border-transparent hover:bg-neo-green hover:text-black hover:border-black shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all mt-4"
                    >
                      Confirm Booking
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="w-24 h-24 bg-neo-green border-4 border-black flex items-center justify-center mb-6 shadow-neo"
                  >
                    <CheckCircle size={48} className="text-black" />
                  </motion.div>
                  <h3 className="text-4xl font-black mb-2 uppercase">Done.</h3>
                  <p className="font-bold mb-8 max-w-xs mx-auto">
                    We'll hit you up within 24 hours. Prepare for greatness.
                  </p>
                  <button
                    onClick={onClose}
                    data-hover="true"
                    className="px-8 py-3 bg-white border-2 border-black font-black uppercase hover:bg-gray-200 shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingForm;