import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-10 h-10 text-white/20" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Your Cart is Empty</h1>
          <p className="text-white/50 mb-6">Add some items to get started</p>
          <Link
            to="/sneakers"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all"
          >
            Browse Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-sm text-red-400 hover:text-red-300 transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={`${item.product.id}-${item.size}`}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-2xl"
                >
                  <Link to={`/product/${item.product.id}`} className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.id}`} className="block">
                      <p className="text-xs text-indigo-400">{item.product.brand}</p>
                      <h3 className="text-sm font-semibold text-white truncate">{item.product.name}</h3>
                      <p className="text-xs text-white/40">Size: {item.size}</p>
                    </Link>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="p-1 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5 text-white/60" />
                        </button>
                        <span className="text-sm font-medium text-white w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="p-1 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5 text-white/60" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-bold text-white">${item.product.price * item.quantity}</p>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="p-1.5 text-red-400/60 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Subtotal</span>
                  <span className="text-white">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Authentication Fee</span>
                  <span className="text-green-400">Included</span>
                </div>
                <div className="pt-3 border-t border-white/10 flex justify-between">
                  <span className="font-semibold text-white">Total</span>
                  <span className="text-xl font-bold text-white">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-indigo-500/25 mb-4">
                Checkout
              </button>

              <div className="flex items-center gap-2 justify-center text-xs text-white/40">
                <Shield className="w-3.5 h-3.5 text-green-400" />
                <span>Secure checkout • Buyer protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
