import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!query) return [];
    const lower = query.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.brand.toLowerCase().includes(lower) ||
      p.colorway.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Search className="w-6 h-6 text-indigo-400" />
            <h1 className="text-3xl font-bold text-white">Search Results</h1>
          </div>
          <p className="text-white/50">
            {results.length} results for "<span className="text-white">{query}</span>"
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-white/10 mx-auto mb-4" />
            <p className="text-xl text-white/40 mb-2">No results found</p>
            <p className="text-sm text-white/30">Try searching for a different term</p>
          </div>
        )}
      </div>
    </div>
  );
}
