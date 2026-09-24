import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products, brands, categories } from '../data/products';
import { SlidersHorizontal, Grid3X3, LayoutGrid } from 'lucide-react';

interface ProductPageProps {
  categoryFilter?: string;
}

export default function ProductPage({ categoryFilter }: ProductPageProps) {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('trending');
  const [viewMode, setViewMode] = useState<'grid' | 'large'>('grid');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter && categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }

    if (selectedBrand !== 'All') {
      result = result.filter(p => p.brand === selectedBrand);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'trending':
        result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
    }

    return result;
  }, [categoryFilter, selectedBrand, sortBy]);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            {categoryFilter === 'Apparel' ? 'Apparel' : categoryFilter === 'Sneakers' ? 'Sneakers' : 'All Products'}
          </h1>
          <p className="text-white/50">{filteredProducts.length} products available</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-white/[0.03] border border-white/10 rounded-2xl">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-white/40" />
            <span className="text-sm text-white/60">Filters:</span>
          </div>

          {/* Brand Filter */}
          <div className="flex flex-wrap gap-2">
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedBrand === brand
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80 focus:outline-none focus:border-indigo-500/50"
            >
              <option value="trending">Trending</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            {/* View Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-white/40'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('large')}
                className={`p-1.5 rounded ${viewMode === 'large' ? 'bg-white/10 text-white' : 'text-white/40'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-white/40">No products found</p>
            <p className="text-sm text-white/30 mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
