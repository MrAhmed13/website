import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Shield, TrendingUp, ChevronLeft, ShoppingBag, Heart, Share2, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | string | null>(null);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-black pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <Link to="/" className="text-indigo-400 hover:text-indigo-300">Go Home</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  const priceDiff = ((product.price - product.retailPrice) / product.retailPrice * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">Back to products</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {product.authenticated && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full">
                    <Shield className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-xs font-semibold text-green-400">Authenticated</span>
                  </div>
                )}
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-2.5 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-colors">
                  <Heart className="w-5 h-5 text-white" />
                </button>
                <button className="p-2.5 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-colors">
                  <Share2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-sm font-medium text-indigo-400 mb-2">{product.brand}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.name}</h1>
            <p className="text-white/50 mb-6">{product.colorway}</p>

            {/* Price Section */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-white/40">Lowest Ask</p>
                  <p className="text-3xl font-bold text-white">${product.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/40">Retail</p>
                  <p className="text-lg text-white/60 line-through">${product.retailPrice}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">{Number(priceDiff) > 0 ? '+' : ''}{priceDiff}% above retail</span>
                </div>
                <div className="text-sm text-white/40">
                  Last Sale: <span className="text-white/70">${product.lastSale}</span>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-white">Select Size</p>
                <button className="text-xs text-indigo-400 hover:text-indigo-300">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-indigo-500 text-white border-2 border-indigo-400'
                        : 'bg-white/5 text-white/70 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                added
                  ? 'bg-green-500 text-white'
                  : selectedSize
                    ? 'bg-indigo-500 hover:bg-indigo-600 text-white hover:scale-[1.02] shadow-lg shadow-indigo-500/25'
                    : 'bg-white/10 text-white/30 cursor-not-allowed'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  {selectedSize ? `Buy at $${product.price}` : 'Select a Size'}
                </>
              )}
            </button>

            {/* Description */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
              <p className="text-white/60 leading-relaxed">{product.description}</p>
            </div>

            {/* Details */}
            <div className="mt-8 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Product Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-white/40">Style</p>
                  <p className="text-sm text-white/80">{product.name}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40">Colorway</p>
                  <p className="text-sm text-white/80">{product.colorway}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40">Release Date</p>
                  <p className="text-sm text-white/80">{product.releaseDate}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40">Retail Price</p>
                  <p className="text-sm text-white/80">${product.retailPrice}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
