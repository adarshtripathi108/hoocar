const { useMemo, useState } = React;

const CARS = [
  { id: 1, name: 'Tata Nexon EV', city: 'Bengaluru', type: 'Electric', seats: 5, price: 1899, rating: 4.92, trips: 84, image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85', host: 'Rohan', color: 'Mint' },
  { id: 2, name: 'Jeep Compass', city: 'Mumbai', type: 'SUV', seats: 5, price: 2799, rating: 4.88, trips: 126, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85', host: 'Ananya', color: 'Black' },
  { id: 3, name: 'Honda City', city: 'Delhi NCR', type: 'Sedan', seats: 5, price: 1699, rating: 4.96, trips: 208, image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85', host: 'Arjun', color: 'White' },
  { id: 4, name: 'Mahindra Thar', city: 'Goa', type: 'Adventure', seats: 4, price: 3199, rating: 4.84, trips: 57, image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85', host: 'Maya', color: 'Red' },
  { id: 5, name: 'Hyundai Creta', city: 'Hyderabad', type: 'SUV', seats: 5, price: 2299, rating: 4.9, trips: 91, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85', host: 'Vikram', color: 'Grey' },
  { id: 6, name: 'Mini Cooper S', city: 'Pune', type: 'Premium', seats: 4, price: 3899, rating: 4.87, trips: 42, image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=85', host: 'Ishita', color: 'Blue' }
];

const Icon = ({ children, size = 20 }) => <span className="icon" style={{ fontSize: size }}>{children}</span>;

function App() {
  const [city, setCity] = useState('Bengaluru');
  const [type, setType] = useState('All cars');
  const [activeCar, setActiveCar] = useState(null);
  const [hostMode, setHostMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredCars = useMemo(() => CARS.filter(car => (city === 'All cities' || car.city === city) && (type === 'All cars' || car.type === type)), [city, type]);

  return <div className="app">
    <nav className="nav shell">
      <a className="brand" href="#top"><span className="brand-mark">H</span><span>hoocar</span></a>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#explore" onClick={() => setMenuOpen(false)}>Explore cars</a>
        <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
        <button className="host-link" onClick={() => setHostMode(true)}>List your car <span>↗</span></button>
      </div>
      <div className="nav-actions"><button className="login">Log in</button><button className="signup" onClick={() => setHostMode(true)}>Get started</button><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">☰</button></div>
    </nav>

    <main id="top">
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span> India’s trusted car-sharing community</div>
          <h1>Your city.<br /><em>Your car.</em></h1>
          <p className="hero-lead">Rent a car from someone nearby. Or turn your idle car into extra income. Hoocar makes every trip feel personal.</p>
          <div className="search-card">
            <div className="search-field"><span className="field-icon">⌖</span><label>Where</label><select value={city} onChange={e => setCity(e.target.value)}><option>Bengaluru</option><option>Mumbai</option><option>Delhi NCR</option><option>Goa</option><option>Hyderabad</option><option>Pune</option><option>All cities</option></select></div>
            <div className="search-field"><span className="field-icon">◷</span><label>When</label><button className="fake-select">Add dates <span>⌄</span></button></div>
            <button className="search-button" onClick={() => document.querySelector('#explore').scrollIntoView({ behavior: 'smooth' })}>Find a car <span>→</span></button>
          </div>
          <div className="trust-row"><span>✦ 4.9/5 average rating</span><span>◉ Verified hosts</span><span>▣ 24/7 support</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-glow"></div><img src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=90" alt="A car on a scenic Indian road" />
          <div className="floating-card host-card"><div className="avatar">A</div><div><strong>Hosted by Ananya</strong><span>Top-rated host · Mumbai</span></div><b>★★★★★</b></div>
          <div className="floating-card trip-card"><span className="trip-icon">↗</span><div><strong>Ready for your next trip?</strong><span>Cars from ₹1,499/day</span></div></div>
        </div>
      </section>

      <section className="stats shell"><div><strong>12k+</strong><span>cars listed</span></div><div><strong>38</strong><span>cities live</span></div><div><strong>98%</strong><span>happy travellers</span></div><div><strong>₹4.2Cr</strong><span>earned by hosts</span></div></section>

      <section className="explore shell" id="explore"><div className="section-heading"><div><span className="kicker">Made for the moment</span><h2>Find your kind of <em>freedom.</em></h2></div><a className="text-link" href="#explore">View all cars <span>→</span></a></div>
        <div className="filter-row"><div className="pills">{['All cars', 'SUV', 'Sedan', 'Electric', 'Premium'].map(item => <button className={type === item ? 'pill active' : 'pill'} onClick={() => setType(item)} key={item}>{item}</button>)}</div><span className="result-count">{filteredCars.length} cars near {city === 'All cities' ? 'you' : city}</span></div>
        <div className="car-grid">{filteredCars.map(car => <article className="car-card" key={car.id} onClick={() => setActiveCar(car)}><div className="car-image"><img src={car.image} alt={car.name} /><span className="heart">♡</span><span className="car-tag">{car.type}</span></div><div className="car-info"><div className="car-title"><div><h3>{car.name}</h3><p>{car.color} · {car.seats} seats · {car.city}</p></div><div className="rating">★ {car.rating}</div></div><div className="car-bottom"><span><strong>₹{car.price.toLocaleString('en-IN')}</strong> / day</span><span>{car.trips} trips</span></div></div></article>)}</div>
        {filteredCars.length === 0 && <div className="empty">No cars found here yet. Try another city or browse all cities.</div>}
      </section>

      <section className="how shell" id="how-it-works"><div className="how-copy"><span className="kicker">The Hoocar difference</span><h2>Good trips start with <em>good people.</em></h2><p>We believe the best way to travel is to feel at home wherever you go. Every Hoocar host and guest is verified, so the only thing you need to think about is where the road takes you.</p><button className="outline-button" onClick={() => setHostMode(true)}>See how it works <span>→</span></button></div><div className="steps"><div className="step"><span>01</span><div><h3>Pick a car</h3><p>Choose from a growing collection of well-loved cars near you.</p></div></div><div className="step"><span>02</span><div><h3>Meet your host</h3><p>Get the keys from a real person, with support whenever you need it.</p></div></div><div className="step"><span>03</span><div><h3>Make it yours</h3><p>Take the long way home. Return it when you’re ready.</p></div></div></div></section>

      <section className="host-banner shell"><div><span className="kicker light">Have a car sitting pretty?</span><h2>Let it earn while<br />you <em>sleep.</em></h2><p>List your car in minutes and join thousands of hosts building their freedom.</p><button className="light-button" onClick={() => setHostMode(true)}>List your car <span>↗</span></button></div><div className="host-art"><div className="art-ring"></div><div className="art-number">₹<strong>28k</strong><span>average monthly<br />host earnings</span></div></div></section>
    </main>

    <footer className="footer"><div className="shell footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">H</span><span>hoocar</span></a><p>Move freely. Live fully.<br />Made for India.</p></div><div><h4>Discover</h4><a href="#explore">Explore cars</a><a href="#how-it-works">How it works</a><a href="#top">Cities</a></div><div><h4>Host with us</h4><a href="#top" onClick={() => setHostMode(true)}>List your car</a><a href="#top">Host protection</a><a href="#top">Host resources</a></div><div><h4>Company</h4><a href="#top">About Hoocar</a><a href="#top">Help centre</a><a href="#top">Contact</a></div></div><div className="shell footer-bottom"><span>© 2026 Hoocar Technologies Pvt. Ltd.</span><span>Made with intention in India 🇮🇳</span></div></footer>

    {activeCar && <div className="modal-backdrop" onClick={() => setActiveCar(null)}><div className="booking-modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setActiveCar(null)}>×</button><img src={activeCar.image} alt={activeCar.name} /><div className="modal-content"><span className="kicker">{activeCar.city} · {activeCar.type}</span><h2>{activeCar.name}</h2><p className="modal-sub">Hosted by {activeCar.host} · {activeCar.rating} ★ from {activeCar.trips} trips</p><div className="modal-price"><strong>₹{activeCar.price.toLocaleString('en-IN')}</strong> / day <button onClick={() => alert('Booking flow coming next — this is your Hoocar preview!')}>Request to book →</button></div></div></div></div>}
    {hostMode && <div className="modal-backdrop" onClick={() => setHostMode(false)}><div className="host-modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setHostMode(false)}>×</button><span className="kicker">Join the community</span><h2>Turn your car into <em>possibility.</em></h2><p>Tell us a little about yourself and we’ll help you get started as a Hoocar host.</p><input placeholder="Your name" /><input placeholder="Phone number" /><select><option>Choose your city</option><option>Bengaluru</option><option>Mumbai</option><option>Delhi NCR</option><option>Goa</option></select><button className="submit-button" onClick={() => { setHostMode(false); alert('Thanks! The Hoocar team will be in touch.'); }}>Start hosting →</button></div></div>}
  </div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
