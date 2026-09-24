import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-7 h-7 text-indigo-500" />
              <span className="text-xl font-black text-white tracking-tight">KICKVAULT</span>
            </Link>
            <p className="text-sm text-white/50 mb-4">
              The most trusted marketplace for authenticated sneakers and streetwear.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Instagram className="w-4 h-4 text-white/60" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Twitter className="w-4 h-4 text-white/60" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Mail className="w-4 h-4 text-white/60" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Marketplace</h4>
            <ul className="space-y-2">
              <li><Link to="/sneakers" className="text-sm text-white/50 hover:text-white transition-colors">Sneakers</Link></li>
              <li><Link to="/apparel" className="text-sm text-white/50 hover:text-white transition-colors">Apparel</Link></li>
              <li><Link to="/sell" className="text-sm text-white/50 hover:text-white transition-colors">Sell</Link></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Price Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Authentication</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">© 2024 KickVault. All rights reserved.</p>
          <p className="text-sm text-white/40">Every product authenticated by our expert team.</p>
        </div>
      </div>
    </footer>
  );
}
