import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';

export default function Hero() {
  const trendingProducts = products.filter(p => p.trending).slice(0, 3);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-indigo-950">
        <img 
          src="https://image.qwenlm.ai/generated-images/165d70a0-7fa3-46bc-8943-6857b9036a9b/_result.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">Authenticated Sneakers & Streetwear</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Buy & Sell
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Authentic Kicks
              </span>
            </h1>

            <p className="text-lg text-white/60 mb-8 max-w-lg">
              The most trusted marketplace for sneakers and streetwear. Every pair verified by our expert authentication team before it reaches you.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/sneakers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/sell"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all hover:scale-105"
              >
                Start Selling
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-white">50K+</p>
                <p className="text-sm text-white/50">Products Sold</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-white/50">Authenticated</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24hr</p>
                <p className="text-sm text-white/50">Fast Shipping</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Featured Products */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main featured card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl">
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                  <Shield className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-xs font-medium text-green-400">Verified</span>
                </div>
                <img
                  src={trendingProducts[0]?.image}
                  alt={trendingProducts[0]?.name}
                  className="w-full h-64 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-lg font-bold text-white">{trendingProducts[0]?.name}</h3>
                <p className="text-sm text-white/50 mb-3">{trendingProducts[0]?.colorway}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">${trendingProducts[0]?.price}</span>
                  <div className="flex items-center gap-1 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+12%</span>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Trending</p>
                    <p className="text-sm font-bold text-white">+24% this week</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Authenticated</p>
                    <p className="text-sm font-bold text-white">Expert Verified</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
