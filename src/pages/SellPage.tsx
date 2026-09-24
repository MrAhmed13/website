import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Upload, DollarSign, Package, Shield, CheckCircle, ArrowRight, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SellPage() {
  const { isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: 'Sneakers',
    price: '',
    condition: 'New',
    description: '',
    size: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Listing submitted! In a production app, this would be sent to the backend.');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black pt-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-4">
          <div className="w-20 h-20 mx-auto mb-6 bg-indigo-500/10 rounded-full flex items-center justify-center">
            <Package className="w-10 h-10 text-indigo-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Start Selling</h1>
          <p className="text-white/50 mb-6">Sign in to list your products on KickVault</p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all"
          >
            Sign In to Sell
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Sell on KickVault</h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            List your sneakers and streetwear on the most trusted marketplace. Zero listing fees, expert authentication included.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Camera, title: 'Upload Photos', desc: 'Take clear photos of your item' },
            { icon: DollarSign, title: 'Set Your Price', desc: 'Choose your asking price' },
            { icon: Shield, title: 'We Authenticate', desc: 'Our experts verify authenticity' },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-2xl"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                <step.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
              <p className="text-xs text-white/40">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="bg-white/[0.03] border border-white/10 rounded-3xl p-8"
        >
          <h2 className="text-xl font-bold text-white mb-6">Product Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Product Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="e.g., Air Jordan 1 Retro High"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Brand</label>
              <select
                value={formData.brand}
                onChange={(e) => setFormData({...formData, brand: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
                required
              >
                <option value="">Select Brand</option>
                <option value="Nike">Nike</option>
                <option value="Jordan">Jordan</option>
                <option value="Adidas">Adidas</option>
                <option value="New Balance">New Balance</option>
                <option value="Puma">Puma</option>
                <option value="Supreme">Supreme</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
              >
                <option value="Sneakers">Sneakers</option>
                <option value="Apparel">Apparel</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Size</label>
              <input
                type="text"
                value={formData.size}
                onChange={(e) => setFormData({...formData, size: e.target.value})}
                placeholder="e.g., 10, M, XL"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Asking Price ($)</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                placeholder="250"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Condition</label>
              <select
                value={formData.condition}
                onChange={(e) => setFormData({...formData, condition: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
              >
                <option value="New">New (Deadstock)</option>
                <option value="Like New">Like New</option>
                <option value="Used">Used - Good</option>
                <option value="Well Used">Used - Fair</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-white/70 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Describe your item, including any notable details..."
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 resize-none"
            />
          </div>

          {/* Upload Area */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-white/70 mb-2">Photos</label>
            <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-indigo-500/30 transition-colors cursor-pointer">
              <Upload className="w-10 h-10 text-white/20 mx-auto mb-3" />
              <p className="text-sm text-white/50">Click to upload photos</p>
              <p className="text-xs text-white/30 mt-1">PNG, JPG up to 10MB each</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8 p-4 bg-green-500/5 border border-green-500/10 rounded-xl">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-400">Seller Benefits</p>
                <p className="text-xs text-white/50 mt-1">
                  Zero listing fees • Free authentication • Seller protection • Fast payouts within 2 business days
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
          >
            Submit Listing
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.form>
      </div>
    </div>
  );
}
