// src/components/Hero.jsx
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Transform Your Child's Future with The Bright Future</h1>
        <p>
          Comprehensive Online Learning Platform for Abacus, Vedic Maths,
          Bhagavad Gita Lessons, Yoga, Meditation, and I-Sense Development
        </p>
        <div className="hero-buttons">
          {/* <a href="#trial" className="btn btn-primary">Start Free Trial</a> */}
          <a href="#courses" className="btn btn-secondary">Explore Courses</a>
        </div>
        <div className="hero-image">
          <div style={{
            width: '100%',
            height: '300px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: 'white'
          }}>
            🧮 Online Learning Platform 🧠
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
