import { useState } from 'react';
import { Search, Star, Download } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  downloads: string;
  imageColor: string;
}

const MOCK_PRODUCTS: Product[] = [
  { id: 1, title: "Factory Arm v4", category: "Robots", price: 0, rating: 4.8, downloads: "12k", imageColor: "#e3f2fd" },
  { id: 2, title: "Warehouse Environment", category: "Environments", price: 49.99, rating: 4.9, downloads: "3.5k", imageColor: "#f3e5f5" },
  { id: 3, title: "Bipedal Walker Gen2", category: "Robots", price: 129.00, rating: 4.5, downloads: "840", imageColor: "#e8f5e9" },
  { id: 4, title: "City Streets Pack", category: "Environments", price: 89.50, rating: 4.7, downloads: "2.1k", imageColor: "#fff3e0" },
  { id: 5, title: "Drone Physics Module", category: "Plugins", price: 19.99, rating: 4.6, downloads: "5k", imageColor: "#ffebee" },
  { id: 6, title: "Mars Terrain", category: "Environments", price: 0, rating: 5.0, downloads: "15k", imageColor: "#fbe9e7" },
  { id: 7, title: "Gripper Attachments", category: "Parts", price: 9.99, rating: 4.3, downloads: "1.2k", imageColor: "#f1f8e9" },
  { id: 8, title: "Logistics Bot X1", category: "Robots", price: 249.00, rating: 4.9, downloads: "400", imageColor: "#eceff1" },
];

export const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Robots", "Environments", "Parts", "Plugins"];

  const filteredProducts = selectedCategory === "All" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="container section">
      <div className="text-center mb-8">
        <h1>Simulation Marketplace</h1>
        <p>Discover robots, environments, and plugins for your TrainBot simulations.</p>
      </div>

      {/* Search and Filter Bar */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '2rem',
        background: 'white',
        padding: '1.5rem',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
          <input 
            type="text" 
            placeholder="Search marketplace..." 
            style={{ 
              width: '100%', 
              padding: '0.75rem 1rem 0.75rem 2.5rem', 
              border: '1px solid var(--border-color)', 
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
           {categories.map(cat => (
             <button
               key={cat}
               onClick={() => setSelectedCategory(cat)}
               style={{
                 padding: '0.5rem 1rem',
                 borderRadius: '4px',
                 backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : 'white',
                 color: selectedCategory === cat ? 'white' : 'var(--color-text-muted)',
                 border: selectedCategory === cat ? 'none' : '1px solid var(--border-color)',
                 fontWeight: 500
               }}
             >
               {cat}
             </button>
           ))}
        </div>
      </div>
      
      {/* Grid */}
      <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
        {filteredProducts.map(product => (
          <div key={product.id} className="card">
            <div className="card-image" style={{ backgroundColor: product.imageColor }}>
              {/* Placeholder illustration */}
              <div style={{ textAlign: 'center', opacity: 0.5 }}>
                 <div style={{ fontWeight: 700, fontSize: '3rem', color: '#374151' }}>{product.title[0]}</div>
              </div>
            </div>
            <div className="card-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                 <div>
                   <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6B7280' }}>{product.category}</span>
                   <h3 className="card-title" style={{ marginTop: '0.25rem' }}>{product.title}</h3>
                 </div>
              </div>
              
              <div className="card-meta">
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={16} fill="#F59E0B" color="#F59E0B" />
                  <span>{product.rating}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Download size={16} />
                  <span>{product.downloads}</span>
                </div>
              </div>
              
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="price-tag">
                  {product.price === 0 ? "Free" : `$${product.price}`}
                </span>
                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                   {product.price === 0 ? 'Get' : 'Buy'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
