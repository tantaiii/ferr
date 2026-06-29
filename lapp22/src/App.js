import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  const menuItems = [
    { 
      id: 1, 
      name: "Margherita Pizza", 
      oldPrice: "$40.00", 
      price: "$24.00", 
      badge: "SALE", 
      badgeColor: "bg-warning text-dark", 
      img: "/image/menu1.jpg" 
    },
    { 
      id: 2, 
      name: "Mushroom Pizza", 
      price: "$25.00", 
      badge: null, 
      img: "/image/menu2.jpg" 
    },
    { 
      id: 3, 
      name: "Hawaiian Pizza", 
      price: "$30.00", 
      badge: "NEW", 
      badgeColor: "bg-warning text-dark", 
      img: "/image/menu3.jpg" 
    },
    { 
      id: 4, 
      name: "Pesto Pizza", 
      oldPrice: "$50.00", 
      price: "$30.00", 
      badge: "SALE", 
      badgeColor: "bg-warning text-dark", 
      img: "/image/menu4.jpg" 
    }
  ];

  return (
    <div className="pizza-site bg-dark text-white min-vh-100">
      
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom px-4 py-3">
        <div className="container-fluid">
         
          <a className="navbar-brand fw-bold font-serif fs-4 me-4 " href="#home">Pizza House</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pizzaNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="pizzaNavbar">
            {/* Các liên kết Menu điều hướng */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <a className="nav-list-link active" href="#home">Home</a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-list-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-list-link" href="#contact">Contact</a>
              </li>
            </ul>
            
           
            <form className="d-flex" onSubmit={(e) => e.preventDefault()} style={{ maxWidth: '400px', width: '100%' }}>
              <div className="input-group">
                <input className="form-control border-0 px-3" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-danger-custom" type="submit">
                 
                  <span style={{ fontSize: '1.1rem' }}>🔍</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>

      {/* --- PHẦN 2: BANNER --- */}
      <div className="position-relative text-center hero-banner">
        <img 
          src="/image/pizza1.jpg" 
          className="w-100 object-fit-cover" 
          style={{ height: '400px' }} 
          alt="Neapolitan Pizza" 
        />
        <div className="position-absolute top-50 start-50 translate-middle w-100 text-center px-3 bg-caption">
          <h2 className="display-5 fw-bold text-white font-serif">Neapolitan Pizza</h2>
          <p className="lead text-light">If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
        </div>
      </div>

      <div className="container py-5">
        
        {/* --- PHẦN 3: OUR MENU (CARDS) --- */}
        <h3 className="mb-4 font-serif text-white">Our Menu</h3>
        <div className="row g-4 mb-5">
          {menuItems.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 text-dark border-0 position-relative shadow-lg">
                {item.badge && (
                  <span className={`position-absolute top-0 start-0 px-3 py-1 fw-bold ${item.badgeColor}`} style={{ zIndex: 1, fontSize: '0.75rem' }}>
                    {item.badge}
                  </span>
                )}
                
                <img src={item.img} className="card-img-top object-fit-cover" alt={item.name} style={{ height: '200px' }} />
                
                <div className="card-body d-flex flex-column justify-content-between p-3">
                  <div>
                    <h5 className="card-title fs-6 fw-bold mb-2">{item.name}</h5>
                    <p className="card-text mb-3">
                      {item.oldPrice && <span className="text-decoration-line-through text-muted me-2">{item.oldPrice}</span>}
                      <span className="text-danger fw-bold">{item.price}</span>
                    </p>
                  </div>
                  <button className="btn btn-navy w-100 text-white btn-sm py-2">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- PHẦN 4: BOOK YOUR TABLE (FORM) --- */}
        <div className="text-center mt-5">
          <h3 className="mb-4 font-serif text-white">Book Your Table</h3>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto" style={{ maxWidth: '900px' }}>
            <div className="row g-3 mb-3">
              <div className="col-12 col-md-4">
                <input type="text" className="form-control form-control-dark" placeholder="Your Name *" required />
              </div>
              <div className="col-12 col-md-4">
                <input type="email" className="form-control form-control-dark" placeholder="Your Email *" required />
              </div>
              <div className="col-12 col-md-4">
                <select className="form-select form-control-dark">
                  <option>Select a Service</option>
                  <option>Dine In</option>
                  <option>Take Away</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <textarea className="form-control form-control-dark" rows="4" placeholder="Please write your comment"></textarea>
            </div>
            <button type="submit" className="btn btn-warning px-5 py-2 fw-bold text-dark text-uppercase shadow-sm">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;