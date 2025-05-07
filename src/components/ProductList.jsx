import React, { useEffect, useState } from "react";
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortOption, setSortOption] = useState("featured");

  // Fetch and enrich data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const enriched = data.map((product, index) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          originalPrice: (product.price * 1.2).toFixed(2),
          image: product.image,
          category: product.category,
          sizes: ["S", "M", "L", "XL"], // Mock sizes
          colors: ["black", "white", "gray"], // Mock colors
          rating: product.rating?.rate || 4.0,
          reviewCount: product.rating?.count || 100,
          isNew: index % 2 === 0 // Mock new status
        }));

        setProducts(enriched);
        setFilteredProducts(enriched);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  // Filter/sort logic
  useEffect(() => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        selectedSizes.some(size => product.sizes.includes(size))
      );
    }

    switch (sortOption) {
      case "price-low-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [searchQuery, priceRange, selectedCategories, selectedSizes, sortOption, products]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 1000]);
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSortOption("featured");
  };

  const categories = Array.from(new Set(products.map(p => p.category)));
  const sizes = ["XS", "S", "M", "L", "XL", "38", "39", "40", "41", "42"];

  return (
    <div className="plp-container">
      <div className="breadcrumb">
        <span>Home</span><span>/</span><span>Men</span><span>/</span><span className="active">Clothing</span>
      </div>

      <div className="plp-header">
        <h1>Our Products </h1>
        <div className="results-count">{filteredProducts.length} products</div>
      </div>

      <button className="mobile-filter-button" onClick={() => setShowMobileFilters(!showMobileFilters)}>
        <i className="filter-icon"></i> Filters
      </button>

      <div className="plp-content">
        {/* Filters Sidebar */}
        <div className={`filters-sidebar ${showMobileFilters ? "mobile-visible" : ""}`}>
          <div className="sidebar-header">
            <h2>Filters</h2>
            <button className="close-sidebar" onClick={() => setShowMobileFilters(false)}>&times;</button>
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Search</h3>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="search-icon"></i>
            </div>
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Price Range</h3>
            <div className="price-range-values">
              <span>${priceRange[0]}</span><span>${priceRange[1]}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="price-slider"
            />
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Category</h3>
            <div className="filter-options">
              {categories.map(category => (
                <div
                  key={category}
                  className={`filter-option ${selectedCategories.includes(category) ? "selected" : ""}`}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Size</h3>
            <div className="filter-options size-options">
              {sizes.map(size => (
                <div
                  key={size}
                  className={`filter-option ${selectedSizes.includes(size) ? "selected" : ""}`}
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {(searchQuery || priceRange[1] < 1000 || selectedCategories.length || selectedSizes.length) && (
            <button className="clear-all-button" onClick={clearAllFilters}>Clear All</button>
          )}
        </div>

        {/* Products Section */}
        <div className="products-section">
          <div className="sort-options">
            <label>Sort by:</label>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.isNew && <div className="new-badge">New</div>}
                  <div className="product-image-container">
                    <img src={product.image} alt={product.title} />
                    <button className="quick-view-button">Quick View</button>
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <div className="price-container">
                      <span className="current-price">${product.price.toFixed(2)}</span>
                      <span className="original-price">${product.originalPrice}</span>
                    </div>
                    <div className="rating-container">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`star ${i < Math.floor(product.rating) ? "filled" : ""}`}>
                            {i < Math.floor(product.rating) ? "★" : "☆"}
                          </span>
                        ))}
                      </div>
                      <span className="review-count">({product.reviewCount})</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search term</p>
                <button className="clear-all-button" onClick={clearAllFilters}>Clear All Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
