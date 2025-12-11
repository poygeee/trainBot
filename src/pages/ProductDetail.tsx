import { Link, useParams } from 'react-router-dom';
import { MOCK_PRODUCTS, Product } from '../data/products';
import { Star, Cpu, Layers, ArrowLeft, ShoppingCart } from 'lucide-react';

export const ProductDetail = () => {
  const { id } = useParams();
    const product = MOCK_PRODUCTS.find((p: Product) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container section text-center">
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Product not found</h2>
        <Link to="/marketplace" className="btn btn-primary" style={{ padding: '0.8rem 1.8rem', fontSize: '1rem' }}>Back to Marketplace</Link>
      </div>
    );
  }

  return (
    <div className="bg-surface">
      <div className="container section">
        <Link to="/marketplace" className="btn btn-outline" style={{ marginBottom: '3rem', display: 'inline-flex', alignItems: 'center', padding: '0.8rem 1.5rem', fontSize: '0.95rem' }}>
          <ArrowLeft size={18} style={{ marginRight: '10px' }} />
          Back to Marketplace
        </Link>

        <div className="grid-2" style={{ alignItems: 'start', gap: '5rem' }}>
          {/* Left Side: Product Info */}
          <div>
            <span className="badge" style={{ fontSize: '0.9rem', padding: '0.3rem 0.8rem' }}>{product.category}</span>
            <h1 style={{ fontSize: '3.2rem', lineHeight: '1.2', marginTop: '1rem', marginBottom: '1.5rem' }}>{product.title}</h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
              A high-fidelity simulation model of the {product.title}, optimized for the TrainBot environment. 
              Perfect for testing complex manipulation and navigation algorithms.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Star size={22} fill="#F59E0B" color="#F59E0B" />
                <span style={{ fontWeight: 600, fontSize: '1.15rem' }}>{product.rating}</span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>(24 reviews)</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <button className="btn btn-accent" style={{ flex: 1, padding: '1.1rem', fontSize: '1.05rem' }}>
                <ShoppingCart size={20} style={{ marginRight: '10px' }} />
                {product.price === 0 ? "Get for Free" : `Buy for $${product.price}`}
              </button>
              <button className="btn btn-outline" style={{ padding: '1.1rem', fontSize: '1.05rem' }}>
                Add to Wishlist
              </button>
            </div>
          </div>

          {/* Right Side: Image & Details */}
          <div>
            <div 
              className="card" 
              style={{ 
                height: '450px',
                backgroundColor: product.imageColor, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '2.5rem'
              }}
            >
              {product.id === 1 ? (
                <img 
                  src="https://i.ibb.co/Kz57fCFD/image.png" 
                  alt={product.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    padding: '2rem'
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
                    padding: '2rem'
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
                    padding: '2rem'
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
                    padding: '2rem'
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
                    padding: '2rem'
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
                    padding: '2rem'
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
                    padding: '2rem'
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
                    padding: '2rem'
                  }} 
                />
              ) : (
                <div style={{ fontWeight: 800, fontSize: '9rem', color: 'rgba(0,0,0,0.1)' }}>{product.title[0]}</div> 
              )}
            </div>
            
            <div className="card" style={{ padding: '2.5rem' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Technical Details</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Cpu size={22} /> <span>Version 2.1.4</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Layers size={22} /> <span>Requires TrainBot v1.8+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
