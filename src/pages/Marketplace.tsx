import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { MOCK_PRODUCTS } from '../data/products';

export const Marketplace = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Robots", "Environments", "Parts", "Plugins"];
  const filtered = filter === "All" ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-pattern-dots">
      <div className="container section">
        <div className="text-center container-narrow mb-xl">
          <h1 className="animate-fade-up" style={{ fontSize: '3rem' }}>Marketplace</h1>
          <p className="animate-fade-up delay-100" style={{ fontSize: '1.15rem', lineHeight: '1.7' }}>
            Browse our ecosystem of high-fidelity robots, environments, and plugins, all optimized for the TrainBot simulation platform.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="animate-fade-up delay-200" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={filter === cat ? 'btn-primary' : 'btn-outline'}
              style={{ padding: '0.75rem 1.75rem', borderRadius: '99px', border: '1px solid var(--color-primary)', fontSize: '1rem' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid-4 animate-fade-up delay-300" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {filtered.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="card card-hover-effect">
              <div className="card-image" style={{ backgroundColor: product.imageColor }}>
                {product.id === 1 ? (
                  <img 
                    src="https://i.ibb.co/Kz57fCFD/image.png" 
                    alt={product.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      padding: '1rem'
                    }} 
                  />
                ) : product.id === 2 ? (
                  <img 
                    src="https://i.ibb.co/q3qVRrN8/image.png" 
                    alt={product.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      padding: '1rem'
                    }} 
                  />
                ) : product.id === 3 ? (
                  <img 
                    src="https://i.ibb.co/7J5TW9NK/image.png" 
                    alt={product.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      padding: '1rem'
                    }} 
                  />
                ) : product.id === 6 ? (
                  <img 
                    src="https://i.ibb.co/zHNcxzLT/image.png" 
                    alt={product.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      padding: '1rem'
                    }} 
                  />
                ) : product.id === 7 ? (
                  <img 
                    src="https://i.ibb.co/N2R8jX27/image.png" 
                    alt={product.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      padding: '1rem'
                    }} 
                  />
                ) : product.id === 8 ? (
                  <img 
                    src="https://i.ibb.co/v4zmbs4T/image.png" 
                    alt={product.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      padding: '1rem'
                    }} 
                  />
                ) : product.id === 9 ? (
                  <img 
                    src="https://i.ibb.co/LdzqKD7p/image.png" 
                    alt={product.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      padding: '1rem'
                    }} 
                  />
                ) : product.id === 10 ? (
                  <img 
                    src="https://i.ibb.co/LhJHsP9q/image.png" 
                    alt={product.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      padding: '1rem'
                    }} 
                  />
                ) : (
                  <div style={{ fontWeight: 700, fontSize: '4.5rem', color: 'rgba(0,0,0,0.08)' }}>{product.title[0]}</div>
                )}
              </div>
              <div className="card-body">
                <h3 className="card-title" style={{ fontSize: '1.25rem' }}>{product.title}</h3>
                <div className="card-meta">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem' }}>
                    <Star size={18} fill="#F59E0B" color="#F59E0B" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <div style={{ marginTop: '1.75rem', textAlign: 'right' }}>
                  <span className="price-tag" style={{ fontSize: '1.25rem' }}>
                    {product.price === 0 ? "Free" : `$${product.price}`}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
