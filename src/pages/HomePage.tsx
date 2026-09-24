import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Clock, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const trendingProducts = products.filter(p => p.trending).slice(0, 4);
  const allProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-black">
      <Hero />

      {/* Features Bar */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: '100% Authentic', desc: 'Expert verified' },
              { icon: Truck, label: 'Fast Shipping', desc: '24hr dispatch' },
              { icon: Clock, label: 'Real-Time Prices', desc: 'Market data' },
              { icon: CreditCard, label: 'Secure Payments', desc: 'Buyer protected' },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-500/10 rounded-xl">
                  <feature.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{feature.label}</p>
                  <p className="text-xs text-white/40">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Trending Now</h2>
            <p className="text-white/50 mt-1">Most popular this week</p>
          </div>
          <Link to="/sneakers" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Sneakers', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=400&fit=crop', count: '10K+ items' },
            { name: 'Apparel', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=400&fit=crop', count: '5K+ items' },
            { name: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=400&fit=crop', count: '2K+ items' },
          ].map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/${cat.name.toLowerCase()}`} className="group relative block h-64 rounded-2xl overflow-hidden">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                  <p className="text-sm text-white/60">{cat.count}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Latest Drops</h2>
            <p className="text-white/50 mt-1">New arrivals on the marketplace</p>
          </div>
          <Link to="/sneakers" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
          <div className="relative text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Selling Today</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of sellers earning money on KickVault. List your sneakers and streetwear with zero listing fees.
            </p>
            <Link
              to="/sell"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              Become a Seller
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
