import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Heart } from 'lucide-react';
import { Product } from '../data/products';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const priceDiff = ((product.price - product.retailPrice) / product.retailPrice * 100).toFixed(0);
  const isAboveRetail = product.price > product.retailPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.authenticated && (
                <div className="flex items-center gap-1 px-2.5 py-1 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full">
                  <Shield className="w-3 h-3 text-green-400" />
                  <span className="text-[10px] font-semibold text-green-400 uppercase">Verified</span>
                </div>
              )}
              {product.trending && (
                <div className="flex items-center gap-1 px-2.5 py-1 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full">
                  <TrendingUp className="w-3 h-3 text-orange-400" />
                  <span className="text-[10px] font-semibold text-orange-400 uppercase">Trending</span>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60">
              <Heart className="w-4 h-4 text-white" />
            </button>

            {/* Price change indicator */}
            <div className={`absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold ${isAboveRetail ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
              {isAboveRetail ? '+' : ''}{priceDiff}%
            </div>
          </div>

          {/* Info */}
          <div className="p-4">
            <p className="text-xs font-medium text-indigo-400 mb-1">{product.brand}</p>
            <h3 className="text-sm font-bold text-white truncate mb-1 group-hover:text-indigo-300 transition-colors">{product.name}</h3>
            <p className="text-xs text-white/40 truncate mb-3">{product.colorway}</p>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-white">${product.price}</p>
                <p className="text-xs text-white/40">Last Sale: ${product.lastSale}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/40">{product.bidCount} bids</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
